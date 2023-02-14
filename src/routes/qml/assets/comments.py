class HybridFunction(Function):
    """ Hybrid quantum - classical function definition """

    @staticmethod  # Note: the @staticmethod decorator is not strictly necessary here
    def forward(ctx, input, quantum_circuit, shift):
        """ Forward pass computation """
        ctx.shift = shift  # Store the shift value for the backward pass
        # Store the quantum circuit for the backward pass
        ctx.quantum_circuit = quantum_circuit

        expectation_z = ctx.quantum_circuit.run(
            input[0].tolist())   # Run the quantum circuit
        # Convert the result to a torch tensor
        result = torch.tensor([expectation_z])
        # Save the input and the result for the backward pass
        ctx.save_for_backward(input, result)

        return result

    @staticmethod
    def backward(ctx, grad_output):
        """ Backward pass computation """
        input, expectation_z = ctx.saved_tensors  # Load the saved tensors
        # Convert the input to a numpy array
        input_list = np.array(input.tolist())

        shift_right = input_list + np.ones(input_list.shape) * ctx.shift # Shift right
        shift_left = input_list - np.ones(input_list.shape) * ctx.shift # Shift left

        gradients = []
        for i in range(len(input_list)):
            expectation_right = ctx.quantum_circuit.run(shift_right[i]) # Run the quantum circuit for the right shift
            expectation_left = ctx.quantum_circuit.run(shift_left[i]) # Run the quantum circuit for the left shift

            gradient = torch.tensor([expectation_right]) - \
                torch.tensor([expectation_left]) # Compute the gradient
            gradients.append(gradient)
        gradients = np.array([gradients]).T
        return torch.tensor([gradients]).float() * grad_output.float(), None, None


class Hybrid(nn.Module):
    """ Hybrid quantum - classical layer definition """

    def __init__(self, backend, shots, shift):
        super(Hybrid, self).__init__()
        self.quantum_circuit = QuantumCircuit(1, backend, shots)
        self.shift = shift

    def forward(self, input):
        return HybridFunction.apply(input, self.quantum_circuit, self.shift)

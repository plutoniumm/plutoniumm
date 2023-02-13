class Graph {
  constructor () {
    this.nodes = new Map();
  }

  addNode ( node ) {
    this.nodes.set( node, [] );
  }

  addEdge ( node1, node2, weight ) {
    this.nodes.get( node1 ).push( { node: node2, weight } );
    this.nodes.get( node2 ).push( { node: node1, weight } );
  }

  aStar ( startNode, endNode ) {
    const distances = new Map();
    const previous = new Map();
    const unvisited = new Set();
    const heap = [];
    let currentNode = null;

    for ( const node of this.nodes.keys() ) {
      distances.set( node, Infinity );
      previous.set( node, null );
      unvisited.add( node );
    }

    distances.set( startNode, 0 );
    heap.push( { node: startNode, distance: 0 } );

    while ( unvisited.size > 0 ) {
      heap.sort( ( a, b ) => a.distance - b.distance );
      currentNode = heap.shift().node;

      if ( currentNode === endNode ) break;


      unvisited.delete( currentNode );

      for ( const neighbor of this.nodes.get( currentNode ) ) {
        const distance = distances.get( currentNode ) + neighbor.weight;

        if ( distance < distances.get( neighbor.node ) ) {
          distances.set( neighbor.node, distance );
          previous.set( neighbor.node, currentNode );
          heap.push( { node: neighbor.node, distance } );
        }
      }
    }

    if ( currentNode !== endNode ) return null;

    const path = [];
    let current = endNode;

    while ( current !== null ) {
      path.unshift( current );
      current = previous.get( current );
    }

    return path;
  }
}

function visualize3D ( graph ) { // takes in a new Graph object, uses THREE.js to visualize it
  const nodes = graph.nodes;
  const links = graph.links;

  // set up the 3D view
  const width = window.innerWidth,
    height = window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( width, height );
  document.body.appendChild( renderer.domElement );

  // create a sphere for each node
  nodes.forEach( node => {
    const sphereGeometry = new THREE.SphereGeometry( 0.5, 32, 32 );
    const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    sphere.position.x = node.x;
    sphere.position.y = node.y;
    sphere.position.z = node.z;
    scene.add( sphere );
  } );

  // create a line for each link
  links.forEach( link => {
    const from = nodes[ link.from ];
    const to = nodes[ link.to ];
    const lineGeometry = new THREE.Geometry();
    lineGeometry.vertices.push(
      new THREE.Vector3( from.x, from.y, from.z ),
      new THREE.Vector3( to.x, to.y, to.z )
    );
    const lineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff } );
    const line = new THREE.Line( lineGeometry, lineMaterial );
    scene.add( line );
  } );

  // render the scene
  function render () {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
  }
  render();
};
/* EXAMPLE
const graph = {
  nodes: [
    { x: -1, y: 0, z: 0 },
    { x: 1, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: 0, y: -1, z: 0 }
  ],
  links: [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 }
  ]
};

visualize3D(graph);
 */

function visualize2D ( graph ) { // takes in a new Graph object, uses d3.js to visualize it
  const nodes = graph.nodes;
  const links = graph.links;

  const width = window.innerWidth,
    height = window.innerHeight;

  const svg = d3.select( 'body' ).append( 'svg' )
    .attr( 'width', width )
    .attr( 'height', height );

  const link = svg.selectAll( '.link' )
    .data( links )
    .enter().append( 'line' )
    .attr( 'class', 'link' )
    .style( 'stroke-width', 2 );

  const node = svg.selectAll( '.node' )
    .data( nodes )
    .enter().append( 'circle' )
    .attr( 'class', 'node' )
    .attr( 'r', 5 )
    .style( 'fill', '#fff' )
    .call( d3.drag()
      .on( 'start', dragstarted )
      .on( 'drag', dragged )
      .on( 'end', dragended ) );

  const simulation = d3.forceSimulation()
    .force( 'link', d3.forceLink().id( d => d.id ) )
    .force( 'charge', d3.forceManyBody() )
    .force( 'center', d3.forceCenter( width / 2, height / 2 ) );

  simulation
    .nodes( nodes )
    .on( 'tick', ticked );

  simulation.force( 'link' )
    .links( links );

  function ticked () {
    link
      .attr( 'x1', d => d.source.x )
      .attr( 'y1', d => d.source.y )
      .attr( 'x2', d => d.target.x )
      .attr( 'y2', d => d.target.y );

    node
      .attr( 'cx', d => d.x )
      .attr( 'cy', d => d.y );
  }

  function dragstarted ( d ) {
    if ( !d3.event.active ) simulation.alphaTarget( 0.3 ).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged ( d ) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended ( d ) {
    if ( !d3.event.active ) simulation.alphaTarget( 0 );
    d.fx = null;
    d.fy = null;
  }
};

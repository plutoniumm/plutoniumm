# Bump plot

from matplotlib import pyplot as plt
import pandas as pd
import numpy as np

# Read json
"""
{
"DATE": {
    "langs": [
      "JavaScript",
      "Vue",
      ...
    ],
    "stats": [
      54.79,
      18.08,
      ...
    ]
  },
  "DATE": {
    ...
  }
}
"""
df = pd.read_json('stats.json')

# Plot
fig, ax = plt.subplots()
ax.set_title('Languages')
ax.set_xlabel('Date')
ax.set_ylabel('Percentage')
ax.set_xticks(np.arange(len(df.index)))
ax.set_xticklabels(df.index)
ax.set_yticks(np.arange(0, 101, 10))
ax.set_ylim(0, 100)
ax.grid(True)

print(df)

# Plot lines
for lang in df.iloc[0]['langs']:
    ax.plot(df.index, df[lang], label=lang)

# Plot legend
ax.legend(loc='upper left')

# Save plot
plt.savefig('plot.png')
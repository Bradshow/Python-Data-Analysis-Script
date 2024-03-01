# Your Python data analysis script here
import pandas as pd
import matplotlib.pyplot as plt

# Read data from CSV file
data = pd.read_csv('data.csv')

# Perform data analysis
# Example: Calculate mean, median, and plot histogram
mean_value = data['value'].mean()
median_value = data['value'].median()

# Plot histogram
plt.hist(data['value'], bins=20)
plt.title('Distribution of Values')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.show()

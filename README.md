# belly-button-challenge
--

Background
--
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogues the microbes that colonise human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


Instructions
--
Complete the following steps:

1 - Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2 - Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

 - Use sample_values as the values for the bar chart.

 - Use otu_ids as the labels for the bar chart.

 - Use otu_labels as the hovertext for the chart.


![image](https://github.com/YaredHaile/belly-button-challenge/assets/142150544/a213a0b8-2414-4958-b27e-fea0f13c85a5)



3 - Create a bubble chart that displays each sample.

 - Use otu_ids for the x values.

 - Use sample_values for the y values.

 - Use sample_values for the marker size.

 - Use otu_ids for the marker colors.

 - Use otu_labels for the text values.


![image](https://github.com/YaredHaile/belly-button-challenge/assets/142150544/1670cf01-ee48-4f38-9504-801349627fbf)


4 - Display the sample metadata, i.e., an individual's demographic information.

5 - Display each key-value pair from the metadata JSON object somewhere on the page.


![image](https://github.com/YaredHaile/belly-button-challenge/assets/142150544/c1eff635-4b5a-46f7-8d56-9ef7eed71eff)


6 - Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![image](https://github.com/YaredHaile/belly-button-challenge/assets/142150544/90fce94f-65e6-44d8-a6f8-8bc2058f433c)


7 - Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

Hints
--
Use console.log inside of your JavaScript code to see what your data looks like at each step.

Refer to the Plotly.js documentationLinks to an external site. when building the plots.

Submission
--
To submit your Challenge assignment, click Submit, and then provide the URL of your GitHub repository for grading.

References
--
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.






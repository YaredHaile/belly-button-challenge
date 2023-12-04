// The url with data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });

// Display the default plots
function init() {
    // Select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Fetch data from the URL
    d3.json(url).then((data) => {
        console.log("Fetched data:", data);

        // Extract names from the fetched data
        let names = data.names;
        console.log("Names:", names);

        // Populate the dropdown with names
        names.forEach((name) => {
            dropdownMenu.append("option").text(name).property("value", name);
        });

        // Set the default name to the first name in the list
        let name = names[0];
        console.log("Default Name:", name);

        // Display default visualizations
        demo(name);
        bar(name);
        bubble(name);
    });
}

// Create the demographics panel
function demo(selectedValue) {
    // Fetch data again for demo visualization
    d3.json(url).then((data) => {
        console.log("Fetched data for demo:", data);

        // Extract metadata from the fetched data
        let metadata = data.metadata;
        console.log("Metadata:", metadata);

        // Filter metadata based on selected value
        let filteredData = metadata.find((meta) => meta.id == selectedValue);
        console.log("Filtered Data for Demo:", filteredData);

        // Select the sample metadata element
        let sampleMetadata = d3.select("#sample-metadata");
        sampleMetadata.html("");

        // Extract key-value pairs from the filtered data and display in the sample metadata
        let entries = Object.entries(filteredData);
        console.log("Entries for Demo:", entries);

        entries.forEach(([key, value]) => {
            sampleMetadata.append("h5").text(`${key}: ${value}`);
        });
    });
}

// Create the bar chart
function bar(selectedValue) {
    // Fetch data again for bar chart
    d3.json(url).then((data) => {
        console.log("Fetched data for bar:", data);

        // Extract samples from the fetched data
        let samples = data.samples;
        console.log("Samples:", samples);

        // Filter sample data based on selected value
        let filteredData = samples.find((sample) => sample.id === selectedValue);
        console.log("Filtered Data for Bar:", filteredData);

        // Process data for the bar chart
        let trace = [{
            x: filteredData.sample_values.slice(0, 10).reverse(),
            y: filteredData.otu_ids.slice(0, 10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: filteredData.otu_labels.slice(0, 10).reverse(),
            type: "bar",
            marker: {
                color: "rgb(95,158,160))"
            },
            orientation: "h"
        }];

        // Create and display the bar chart
        Plotly.newPlot("bar", trace);
    });
}

// Create the bubble chart
function bubble(selectedValue) {
    // Fetch data again for bubble chart
    d3.json(url).then((data) => {
        console.log("Fetched data for bubble:", data);

        // Extract samples from the fetched data
        let samples = data.samples;
        console.log("Samples:", samples);

        // Filter sample data based on selected value
        let filteredData = samples.find((sample) => sample.id === selectedValue);
        console.log("Filtered Data for Bubble:", filteredData);

        // Process data for the bubble chart
        let trace = [{
            x: filteredData.otu_ids,
            y: filteredData.sample_values,
            text: filteredData.otu_labels,
            mode: "markers",
            marker: {
                size: filteredData.sample_values,
                color: filteredData.otu_ids,
                colorscale: "Rainbow"
            }
        }];

        let layout = {
            xaxis: { title: "OTU ID" }
        };

        // Create and display the bubble chart
        Plotly.newPlot("bubble", trace, layout);
    });
}

// Move to new plots when option changed
function optionChanged(selectedValue) {

    // Log the new value
    console.log(selectedValue); 

    // Update visualizations based on the selected value
    demo(selectedValue);
    bar(selectedValue);
    bubble(selectedValue);
}

// Initialize the process
init();

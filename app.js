const ele = document.getElementById("project-details");
const modal = document.getElementById("myModal");
const masterData = [
  { image: "project_images/DS/OCR/ocr.png", title: "Extracting Business Card Data with OCR", description: "Optical Character Recognition (OCR) technology offers a solution for extracting data from business cards. |This technology allows computers to read text from images, making it possible to automatically convert business card information into a digital format. |This application will benefit professionals, entrepreneurs, and anyone who frequently encounters business cards and desires a streamlined method for capturing and managing contact information."},
  { image: "project_images/DS/copper/copper.png", title: "Industrial Copper Modelling", description: "Developed a machine learning model to accurately predict sales status (won/lost) and selling price of copper transactions. |Transformed the raw data of around 1,81,000 records into a clean and insightful format by handling missing ,values, and outliers to create optimal inputs for the models. |Implemented machine learning algorithms and attained an impressive R^2 value of 0.99 indicating a high correlation between actual and predicted selling price."},
  { image: "project_images/DS/Airbnb/Dashboard.png", title: "Airbnb Analysis with Power BI", description: "Employed Power BI to deliver data-driven insights on Airbnb listings, empowering users to make informed decisions. |Leveraged a dataset encompassing 5,556 Airbnb listings from 3,138 hosts to conduct a comparative analysis. |Investigated the influence of various factors on guest decisions, including pricing strategies by location and property type, guest review ratings, and available stay types."},
  { image: "project_images/DS/phonpe/phonepe.png", title: "Phonpe Pulse Data Exploration Tool", description: "Built a geo-visualization dashboard through Streamlit and Python using PhonePe pulse data. |Processed PhonePe data encompassing transactions and user details (October 2023 cutoff) into a well-structured SQL database. |Cleaned and validated the data to ensure accuracy and consistency. |Designed interactive visualizations, enabling users to drill down into specific data points and identify trends."},
  { image: "project_images/DS/youtube/yt.png", title: "YouTube Data Harvesting and Warehousing", description: "Leveraging Google Cloud Platform (GCP) to automate harvesting of YouTube data and store in SQL warehouse. |Designed a data harvesting pipeline to extract specific metrics from YouTube channels, such as video count, comments, and viewership patterns. |The data pipeline facilitated the transformation of raw YouTube data into a structured format, unlocking valuable insights."},
  { image: "project_images/Crop_classification/crop_map.png", title: "Crop detection using random forest classifier", description: "Crop detection involves the process of identifying and categorizing different types of crops or vegetation in a given area using remote sensing and data analysis techniques.|The area of interest (AOI) is located near Kashkadarya in Uzbekistan.|The AOI is about 20.65 km2.|The landforms in the AOI are fallow, barren, built-up, and several croplands.|The crop type data is acquired from the CAWa project in the Central Asia region.|The dataset consists of 8435 crop samples in total.|Hence, the data undergoes several filtering steps.|The Random forest algorithm achieved an accuracy of 82.8% in the classification task."},
  { image: "project_images/Change_detection/periodic_changes.png", title: "Monitoring highway construction activity", description: "The project monitors the highway construction for a patch of 10km of NH 275. |The contruction activity is monitored by post-classification comparison and change detection techniques. |A simple change detection technique is applied to detect changes in road construction activity. |The image differencing technique determines changes between two images. |The brighter pixels indicate change pixels and the darker pixels indicate no-change pixels. |Otsu thresholding creates a binary image showing the changes with pixel value '1' and no change as '0'."},
  { image: "project_images/Crop_classification/crop_map.png", title: "Land Use Land Cover (LULC) map using Random Forest Classifier", description: "LULC map provides information on Earth's surface. |Data products includes temporal Sentinel-2A surface reflectance products and labeled ground truth data created with polygon vector shapefiles. |The model's training phase includes test-train dataset split, calculating class weights for the imbalenced training samples, agjusting hyperparameters and finally training the model with Random Forest classifier algorithm. |Random forest shown better classification accuracy in comparison to other machine learning algorithms."},
  { image: "project_images/Crop_rotation/CR.gif", title: "A study on crop rotation assessment using DWT analysis on Sentinel-1 SAR data", description: "The study deals with assessment of crop rotation using multi-temporal Sentinel-1A SAR data.|The Sentinel-1a Ground Range Detected (GRD) data products VH and VV polarization are acquired from 21 August 2019 to 01 January 2022 with a 12-day interval. |Ginger, tobacco, paddy, cabbage, and pumpkin were the crops cultivated during the considered period. |Crop classification is done on SAR images and Discrete Wavelet Transform (DWT) is applied to SAR images to study the effectiveness of wavelet transform on SAR backscattering values. |Temporal analysis differentiates cropping patterns in an agricultural field and crop rotation is assessed." },
  { image: "project_images/Godavari/g.gif", title: "Determination of river water parameters on Godavari River segment using satellite data", description: "Water level and discharge, which are Essential Climate Variable (ECV) are identified from Godavari River using Landsat series imagery.Long-term changes are analyzed using the Global Surface Water (GSW) dataset in Google Earth Engine. |Several water indices are analysed to determine best method in water pixel extraction from a river segmentWater level and discharge model are developed with satellite-based river width and CWC's in-situ observations." },
  { image: "project_images/MSW/msw.gif", title: "Identifying municipal solidwaste dumping site location using AHP and GIS techniques: A study of Coimbatore district, India", description: "Dumping or landfilling in unsuitable areas becomes a biggest concern to solid waste management authorities. |I determined alternative landfilling sites in Coimbatore district using GIS and Analytic Hierarchy Process (AHP) techniques. |Criteria considered are population density, slope, geology, geomorphology, land use/landcover, ground water potential zones, and proximity to road, river, rail, and airport.Weighted overlay, a spatial analyst tool reclassifies raster maps and a final suitability map is generated." },
  { image: "project_images/RPC/RPC.gif", title: "Reactive Powder Concrete with Composite Fibres", description: "Reactive Powder Concrete (RPC) is a composite material characterised with high strength and durability. |It is a type of concrete made without coarse aggregate, and contains cement, river sand, micro silica, super plasticizer and composite fibres with low watre cement ratio. |In this project we cast RPC specimens of suitable mix proportions by trail and error method and tested its compressive strength, tensile strength and flexural strength. |The goal of this project was to acheive high compressive and flexural strength without the addition of coarse aggregates. |The addition of composite fibres and superplasticizers helped in achieving high strength quicker than conventional concrete." },
  { image: "project_images/Auditorium/aud.gif", title: "Planning, Analyzing & Designing of an auditorium using autoCAD and STAAD pro", description: "The project plans to design an Auditorium of 1000 people capacity with fire alarm systems, parking area, canteen facilities, and rehearsal rooms as per National Building Code of India 2000 using AutoCAD 2014. |It is analyzed using STAAD pro v8i software and manual calculations." }
];

const projectData = `
  ${masterData.map(data => `
    <div class="project">
      <img class="grid-image" src="${data.image}">
      <h3 class="grid-text">${data.title}</h3>
    </div>
  `).join('')}
`;

ele.innerHTML = projectData;

const projects = document.getElementsByClassName("project");
const modalContent = document.getElementById("modal-content");
const modalTitle = document.getElementsByClassName("modal-title")[0];
const modalDesc = document.getElementsByClassName("modal-desc")[0];
const closeIcon = document.getElementsByClassName("close")[0];

Array.from(projects).forEach((element, index) => {
  element.onclick = () => {
    const title = element.innerText;
    modalTitle.innerText = title;
    const imageData = element.children[0].src;
    document.getElementsByClassName('main-image')[0].src = imageData;
    const { description } = masterData[index];
    const li = description.split('|').map(line => `<li class="desc">${line}</li>`).join('');
    modalDesc.innerHTML = li;
    modal.style.display = "block";
  }
});

closeIcon.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
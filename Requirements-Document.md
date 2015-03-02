Software Engineering
Requirements Document
Due: Feb 13 via Moodle
Graded out of 20 points.

Top Matter. 
Team D1|| When To Fly || https://github.com/huntertorset/Software-Engineering-Project.git
Larisa Fossum, Dylan McShane, Hunter Torset

Section 1.  Introduction 
	Our team will be looking at data regarding number of flights outbound from the Portland to a set number of destination cities around the United States, and average cost of those flights. With this data visualized, it will be easier for consumers to see when the most popular travel times are, and what the corresponding average flight prices are for those times. Providing this information can assist the reading in making informed decisions regarding when to travel (based off popularity of travel), and when the best prices are often available. Ultimately, this can help them find the least expensive, and most desirable time to travel, if that is what they desire.

Section 2. Domain Knowledge
	Our data is viewed by quarters. For example Q1 corresponds to Quarter 1, which encompasses January through March. Q2 corresponds to Quarter 2, which encompasses April through June. And similarly Q3 and Q4 encompasss July through  September and October through December respectively. 
	We selected the cities listed because they are some of the top destination spots in the US. Our data source had consistent information for each of these cities. The data is a composite of all the airlines that fly the given route. 
	The data set we used had information about flights to and from Portland. Each city listed the average and lowest prices booked for the quarter, as well as the average number of passengers per day traveling. 

Section 3.  Visualization Requirements

![](https://docs.google.com/a/up.edu/file/d/0B1X92P02HWwUcThsM3BqVERKaXM/edit)

Figure 1.0.  A depiction of the final visualization.  Users received a visualized, quarterly summary of the number of passengers and price for flight between 2009 and 2013.  

As depicted in Figure 1.0, the visualization will have three groups of features.

Year selection.  As indicated by the circled (1) in Figure 1.0, two buttons allow users to see the previous and next year of data.  Clicking on the left arrow yields the quarterly summary of the previous year.  Similarly, clicking on the right arrow yields the next year.  The text, ‘2012’ indicates the currently visualized year.  
City selection.  As indicated by the circled (2) in Figure 1.0, users may choose to see the flight information for a subset of cities in the United States.  For example, upon clicking on “St. Louis”, the column chart transitions to displaying passenger and price data for only those flights going to St. Louis. 
Column selection.  As indicated by the circled (3) in Figure 1.0, when a bar in the graph is moused-over, the column changes color and the quarter, flight cost, and number of travelers are summarized in a small box above the column.
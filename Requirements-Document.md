Software Engineering Requirements Document
Team D1|| When To Fly || https://github.com/huntertorset/Software-Engineering-Project.git Larisa Fossum, Dylan McShane, Hunter Torset

Introduction:
Our team will look at data regarding flights outbound from Portland to a set number of destination cities around the United States. The data is a report of the average number of passengers and average cost of those flights. With this data visualized, it will be easier for consumers to see when the most popular travel times are, and what the corresponding average flight prices are for those times. This information will help someone find the least expensive and most desirable time to travel.

Domain Knowledge:
Our data is part of the flight data collected by the Department of Transportation and can be found at http://www.dot.gov/policy/aviation-policy/domestic-airline-consumer-airfare-report. The data is a composite of all the airlines that fly the given routes to and from various destinations around the United States. Each route lists the average and lowest prices booked for the quarter, as well as the average number of passengers per day traveling. The data is collected and reported every quarter.

We selected the cities listed in Figure 1.0 because they are some of the top destination spots in the US, and our data source had consistent flight information from Portland each of these cities. We chose to display information about Portland so that it would be relevant to the demographic we are attempting to reach: the students of University of Portland. Quarter 1(Q1) consists of January-March, Quarter 2 (Q2) consists of April-June, Quarter 3(Q3) consists of July-September, and Quarter 4(Q4) consists of October-December.

Visualization Requirements:

![](https://docs.google.com/a/up.edu/file/d/0B57eSH7IgT1pMkNzaW1TYk5zOEFNc1NibmZGcjZ0RkN5bnNV/edit)

Figure 1.0. A depiction of the final visualization. Users receive a visualized, quarterly summary of the number of passengers and price for flight between 2009 and 2013. 
Depicted in Figure 1.0, the visualization will have three distinct features:
Year selection: Indicated by the circled (1) in Figure 1.0, two buttons allow users to see the previous and next year of data. Clicking on the left arrow yields the quarterly summary of the previous year. Clicking on the right arrow yields the next year. The text, ‘2012’ indicates the currently visualized year.
City selection: Indicated by the circled (2) in Figure 1.0, users may choose to see the flight information from Portland to a subset of cities in the United States. For example, upon clicking on “St. Louis” the column chart transitions to displaying passenger and price data for only those flights going from Portland to St. Louis. 
Column selection:  Indicated by the circled (3) in Figure 1.0, when a bar in the graph is moused-over, the column changes color and a box displays above the column summarizing the quarter, average flight cost, lowest flight cost, and number of travelers.
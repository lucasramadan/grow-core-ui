# Grow Core UI

This is a fake webpage meant to look like a Dashboard. 
You can select various metrics, at which point the data displayed should update.
It should highlight where issues are in red coloring,

### ToDo:
- [ ] Fixed NavBar + Header: Issue with overlap & having both fixed?
- [ ] Metric units would be better as a hover, rather than displayed on core
  - [ ] For above, move metric units into the `metricList.js` file (more appropriate)
- [ ] Alerts in header should be calculated based on `status` and `firmware` values
  - [ ] Consider changing the color of the core tile if offline?
- [ ] Core measurement text color should change if it is outside of `lowerBound` and `upperBound`
- [ ] Change the header once someone has clicked on a core
  - [ ] (Stretch) Allow plotting of the historical data


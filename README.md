# Try it out:

1. `docker-compose up`

2. Go to [http://localhost:4000/](http://localhost:4000/#/build?query={%22measures%22:[%22EstimatedOpportunity.hcpCount%22,%22EstimatedOpportunity.socCount%22,%22EstimatedOpportunity.opportunityValue%22],%22dimensions%22:[%22ZipcodeLocation.zipCode%22],%22order%22:{%22EstimatedOpportunity.hcpCount%22:%22desc%22},%22filters%22:[{%22member%22:%22ZipcodeLocation.state%22,%22operator%22:%22equals%22,%22values%22:[%22NY%22]},{%22member%22:%22EstimatedOpportunity.productId%22,%22operator%22:%22in%22,%22values%22:[%225%22,null]}]})


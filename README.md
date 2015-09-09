# node-bluemix-helpers
Utilities to work with Bluemix services

This is a work in progress, highly subject to changes.

## Insights for Twitter
    
    var helpers = require('node-bluemix-helpers')
    var twitter = helpers.Twitter("url-to-bluemix-insights-service-api",
                                  "username-for-service",
                                  "password-for-service")
    // Counts tweets tagged as #bluemix                                  
    twitter.count("#bluemix", function(error, body) {
      // body will contain the result object
    });
    
    // Retrieves the first 20 tweets tagged as #bluemix
    twitter.search("#bluemix", 20, function(error, body) {
    });
    
# License

The MIT License (MIT)

Copyright (c) 2015 Frederic Lavigne

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
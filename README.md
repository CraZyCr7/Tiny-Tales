# Tiny-Tales
In this Project i had used React Js. As basically we had given a link of a txt file in which there are words and we had to extract that words from that text file
and we had to plot a histogram of top 20 most occuring words in that histogram . As this consist of two different parts which means that we had to make use of our 
problem solving skills as well as our development skills.

## React Modules
As i had used React Js in this project so which means firstly i had to install the react application in the given directly. Which can be done using below code-
- ``` npx create-react-app app name ```

Now we had to start the react server by using command 
- ```npm start```

Now the server has started then as we had our project so that i had created SubmitButton.js file for every work and then finally rendering it to the main App.js.

As we had given the text format data and we had to plot a histogram which needs to imported using commands
- ```npm install recharts```

By importing this i can use it for making charts which will cover that data as in histogram.

Now I had made class for the submit, export and container.
- In that particular class of submit i had used a function called handleclick which helps us to fetch data from the given text file and getting the top 20
occurence of words and storing it in the array. 
- In the Export class i had used a function called handleclick which helps us to download the fetched top 20 occurence of words in the given text file.

After all this i had deployed mine website on netlify.
- Here is the deployed Link you can copy it to the web browse and make sure your internet connection is there as we are fetching data from the text file so if the
internet will not be there then the data can't be fetched and you will not be able to se the histogram.
```https://word-count7.netlify.app/```


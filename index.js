function getToken() {
  const token = "4201753ee2cb198a0862ad8416ea631d1255db82"
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`${repo}/forks`,
    {
      method: 'POST'
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

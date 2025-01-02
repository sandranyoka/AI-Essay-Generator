function displayStory(response){
new Typewriter('#story', {
  strings:response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",
});
  

}

function generateStory(event){
    event.preventDefault();

  let instructionsInput=document.querySelector("#user-instructions");

  let apiKey="fbbeo522008a6t423889d2a000ef043e";
  let prompt=`User instructions: Generate creative english stories ${instructionsInput.value}`;
  let context="You are helpful AI Assistant who has a lot of knowlege about creative stories or compositions and love to to write.Your mission is to generate short stories or compositions in basic HTML not more than 4 paragraphs, do not include the tittle of the story.Make sure to follow user instructions."; 
   let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

   let storyElement=document.querySelector("#story");
   storyElement.classList.remove("hidden");
   storyElement.innerHTML=`<div class="generating"> ⏳Generating story about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayStory);

}

let storyGeneratorFormElement=document.querySelector("#story-generator-form");
storyGeneratorFormElement.addEventListener("submit", generateStory);

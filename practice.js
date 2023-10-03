export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  let varsAndTypes = 'varsAndTypes'
  console.log(varsAndTypes, typeof(varsAndTypes))

  let string = 'string cool'
  let number = 47.3
  let array = [14, 3, 7, 10]
  const nummret1 = 1 

  console.log('Jag har visat dom 3 vanligaste datatypperna med let som skapar en lokal variabel. Const skapar en variabel som man inte kan ändra på')
}

function operators(element) {
  // kod för att visa vad du lärt dig om operatorer
  console.log('operators === ', 1 === 1)

  let antal1 = 2
  let antal2 = 6 + 2
  let fakeAntal = '2'
  //tildelar antal ett värde

antal1 == antal2
//kollar om dom har samma värde, men inte om datatypen  är samma och därmed får man att en string kan vara lika med en number
console.log('yo guys this is ' + (antal1 == fakeAntal))

antal1 === fakeAntal
console.log('i am a hate on this ' + (antal1 === fakeAntal))
//med tre likamed så kollar js även datatypen. och därmed är det nu false

antal1 !== antal2
//kollar om det inte är lika med 
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let controlStructures = 'controlStructures'
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')

  var namn1 = 'Affe'
  var namn2 = 'Affe apa'
  var siffra1 = 1
  var siffra2 = 3

  if (namn1 != namn2){
    console.log('dom heter olika mannen')
  } else if (namn1 == namn2){
    console.log('dom heter samma brush')
  }
  //if satsen kollar om något är sant, om det är det så gör den vad som står i if satsen och om det är falskt så hoppas det över

  while (siffra1 != siffra2) {
    console.log(siffra1)
    siffra1++
  }

  for(let i = 3; siffra1 == i; i++){
    console.log('mannen hallå siffra1 är 3')
  }
  //for och while loopar gör en sak medans något är sant och det är typ ganska coolt, väldigt användbart om det inte är coolt iaf
}

function arraysAndObjects (element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', {and: 'objects'}])
}

function domAndEvents (element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
}

function domManipulation (element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
}
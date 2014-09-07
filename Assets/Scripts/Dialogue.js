#pragma strict

var text : String;
var flag : Sprite;
var guiPosX : int = 620; 
var guiPosY : int = 100; 
var guiWidth : int = 120; 
var guiHeight : int = 400; 

var num0dialogue = new Array(
	"There’s nothing nearby, as far as I can remember.",
	"The are no obstacles in the immediate vicinity, but move cautiously all the same.",
	"Molly just cleaned that area. You should be safe.",
	"Don’t worry, you’re not surrounded by anything dangerous.",
	"Keep going. Any direction will do.",
	"You can move freely for the time being, but go slow. And hurry up."
);

var num1dialogue = new Array(
	"You should be near a very expensive microscope, so try not to destroy it.",
	"That’s where Molly left a cup of coffee earlier. She won’t be pleased if you spill it.",
	"You should be at the pile of petri dishes by now.",
	"There was a spill in that area earlier, and the ground is still slippery. Be aware.",
	"Look out for the other experiment I’m running. It’s even more important than this one.",
	"You’re near the computer. Don’t touch it, or you could wake up the screen."
);

var num2dialogue = new Array(
	"Don’t knock over those two stools.",
	"A couple of fragile beakers are in your immediate vicinity.",
	"You’re close to my mobile and a glass of water. Please do not knock one into the other.",
	"Either of those flasks will release a toxic gas if disturbed. I wouldn’t recommend it.",
	"The pair of evidence bags near you is not to be touched.",
	"Don’t knock over those two stools."
);

var num3dialogue = new Array(
	"After Molly dropped that beaker, I remember spotting three separate shards of glass in the general area.",
	"You are now surrounded by sharp instruments. I would exercise caution.",
	"The three blood samples near you are essential to a case I’m working on.",
	"I left a few files over there; try not to scatter them on the ground.",
	"After Molly dropped that beaker, I remember spotting three separate shards of glass in the general area.",
	"You are now surrounded by sharp instruments. I would exercise caution."
);

function Start () {
 guiPosX = 490; 
 guiPosY = 100; 
 guiWidth = 120; 
 guiHeight = 400;
}

function Update () {

}

function OnCollisionEnter2D (c : Collision2D){
	if(c.gameObject.GetComponent(SpriteRenderer).sprite != flag){
		var randDialogue : int = Random.Range(0,5);
		if(c.gameObject.tag == "Number1"){ text = num1dialogue[randDialogue].ToString(); }
		if(c.gameObject.tag == "Number2"){ text = num2dialogue[randDialogue].ToString(); }
		if(c.gameObject.tag == "Number3"){ text = num3dialogue[randDialogue].ToString(); }
		if(c.gameObject.tag == "tile"){ text = num0dialogue[randDialogue].ToString(); }
		if(c.gameObject.tag == "Goal"){ text = "I AM GROOT"; }		
	}
}

function say ( msg : String ) {
  text = msg;
}

function OnGUI(){
	/*
	var style : GUIStyle = new GUIStyle();
	style.fontSize = 14; 
	GUI.contentColor = Color.white;
	*/
	//GUI.Label(new Rect(guiPosX,guiPosY,guiWidth,guiHeight), text);
	GUI.Label(new Rect(Screen.width-(Screen.width/5),(Screen.height/9),120,400), text);
	
}


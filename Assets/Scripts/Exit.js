#pragma strict

var tiles : GameObject;
var background : GameObject;

function OnCollisionEnter2D (c : Collision2D){
	tiles.SendMessage("ActivateObject", false);
	background.SendMessage("ActivateObject", true);
	
}
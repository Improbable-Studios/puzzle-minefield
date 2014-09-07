#pragma strict

var bomb : Sprite;
var flag : Sprite;
var tile : Sprite;
var isFlagged = false;

function OnCollisionEnter2D (c : Collision2D){
	if(!isFlagged){
		GetComponent(SpriteRenderer).sprite = bomb;
		audio.Play();
		//hide bomb after ... no!!
//		yield WaitForSeconds(0.2);
//		GetComponent(SpriteRenderer).enabled = false;
	}
}

/*
function OnMouseDown () {
	isFlagged = !isFlagged;
	if(isFlagged){
		GetComponent(SpriteRenderer).sprite = flag;
		transform.gameObject.tag = "flag";
		}
	else {
		GetComponent(SpriteRenderer).sprite = tile;
		transform.gameObject.tag = "bomb";
		}
}
*/
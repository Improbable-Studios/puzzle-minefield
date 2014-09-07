#pragma strict

var num1 : Sprite;
var num2 : Sprite;
var num3 : Sprite;
var tile : Sprite;
var flag : Sprite;
var isFlagged = false;

function OnCollisionEnter2D (c : Collision2D){
	if(GetComponent(SpriteRenderer).sprite != flag){
		if(gameObject.tag == "Number1"){
			GetComponent(SpriteRenderer).sprite = num1;
			gameObject.collider2D.enabled = false;
		}
		if(gameObject.tag == "Number2"){
			GetComponent(SpriteRenderer).sprite = num2;
			gameObject.collider2D.enabled = false;
		}
		if(gameObject.tag == "Number3"){
			GetComponent(SpriteRenderer).sprite = num3;
			gameObject.collider2D.enabled = false;
		}
		if(gameObject.tag == "tile"){ Destroy(gameObject); }
	}
}

function OnMouseDown () {
	isFlagged = !isFlagged;
	if(isFlagged){
		GetComponent(SpriteRenderer).sprite = flag;
		}
	else {
		GetComponent(SpriteRenderer).sprite = tile;
		}
}
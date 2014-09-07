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

function OnMouseDown () {

    Debug.Log("This is a " + this.tag.ToString() );

    //do nothing if its already a bomb !
    if (GetComponent(SpriteRenderer).sprite == bomb) 
    {
      return;
    }

	isFlagged = !isFlagged;
	if(isFlagged){
		GetComponent(SpriteRenderer).sprite = flag;
		gameObject.tag = "flag";
		}
	else {
		GetComponent(SpriteRenderer).sprite = tile;
		gameObject.tag = "bomb";
		}
}
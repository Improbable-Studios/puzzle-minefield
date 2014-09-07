#pragma strict

var startX : float;
var startY : float;
var targetPosition : Vector3;
var speed : float = 5;
var gridSize : int = 1;
var animator : Animator;

var startPosition : Vector3;
var endPosition : Vector3;
var timer : float = 1.0f;
var bTest : boolean = false;

var triesLeft : int;

function test() : boolean {
  return true;
}

function Start(){
	animator = GetComponent(Animator);
	timer = 1.0f;
    startX = -14.40787;
    startY = 11.47284;
    
    transform.position.x = startX;
	transform.position.y = startY;    
	
	animator.enabled = false;
	//get the tries from somewhere
	triesLeft = 3;
	
}

function FixedUpdate(){
	
	if ( timer < 1.0f ) 
	{
	  //Debug.Log("Start: " + startPosition.ToString() + " End: " + endPosition.ToString() + " Time: " + timer.ToString());
	  
	  timer += Time.deltaTime;
	  
	  if (timer > 1.0f)
	  {
	   timer=1.0f;
	   animator.enabled = false;		
	  }

	  transform.position = Vector3.Lerp(startPosition, endPosition, timer);
	} 
	
	if ( timer >= 1.0f && triesLeft > 0 ) 
	{
		if (Input.GetKey(KeyCode.UpArrow) == true){
			animator.SetInteger("Direction", 2);
			startPosition = transform.position;
			endPosition = startPosition + new Vector3(0.0f, 3.22f, 0.0f);
			timer = 0.0f;
		    animator.enabled = true;		
		}
		if (Input.GetKey(KeyCode.RightArrow) == true){
			animator.SetInteger("Direction", 3);
			startPosition = transform.position;
			endPosition = startPosition + new Vector3(3.22f, 0.0f, 0.0f);		
			timer = 0.0f;
		    animator.enabled = true;		
		}
		if (Input.GetKey(KeyCode.LeftArrow) == true){
			animator.SetInteger("Direction", 1);
			startPosition = transform.position;
			endPosition = startPosition + Vector3(-3.22f, 0.0f, 0.0f);		
			timer = 0.0f;
		    animator.enabled = true;		
		}
		if (Input.GetKey(KeyCode.DownArrow) == true){
			animator.SetInteger("Direction", 0);
			startPosition = transform.position;
			endPosition = startPosition + Vector3(0.0f, -3.22f, 0.0f);		
			timer = 0.0f;
		    animator.enabled = true;		
		}
	}
	
}

function OnGUI () {
	if ( triesLeft <= 0 )
	{
      GUI.Box(Rect(0,0,Screen.width,Screen.height),"Puzzle Failed!");	  
	}  
}

function OnCollisionEnter2D (c : Collision2D){
	if(c.gameObject.tag == "bomb"){
	    timer = 1.0f;
		Time.timeScale = 0.01;
		yield WaitForSeconds(0.02);
		Time.timeScale = 1.0;
		transform.position.x = startX;
		transform.position.y = startY;
		animator.enabled = false;
		triesLeft--;
		
		if ( triesLeft <= 0 )
		{
		  animator.enabled = false;
		  
		  var dlg : Dialogue = GetComponent(Dialogue);
		  dlg.say("You failed!");
		  
		  var sr : SpriteRenderer = GetComponent(SpriteRenderer);
		  sr.enabled = false;
	    }
	    //Debug.Log("Tries left: " + triesLeft);
	}
	if(c.gameObject.tag == "Wall") {
	  //Debug.Log("isa Wall!");
	  endPosition = startPosition;
	}
	if(c.gameObject.tag == "Goal") {
	  //Debug.Log("I AM GROOT!");
	  endPosition = startPosition;	  
	}
	
}
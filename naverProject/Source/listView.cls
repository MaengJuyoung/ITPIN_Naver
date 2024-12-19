
/**
Constructor
Do not call Function in Constructor.
*/
class listView()
{
	super();

	this.data = null; 

}
extends AView;


function listView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function listView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function listView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function listView*setData(data) 
{     
    this.data = data; 

	//console.log("this.data.content = ",this.data.content);
    this.content.setText(this.data.content);
	
};  

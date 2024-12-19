
/**
Constructor
Do not call Function in Constructor.
*/
function listView()
{
	AView.call(this);

	this.data = null; 

}
afc.extendsClass(listView, AView);


listView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

listView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

listView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

listView.prototype.setData = function(data) 
{     
    //this.data = data; 

	//console.log("this.data.content = ",this.data.content);
    this.content.setText(data.content);
	
};  

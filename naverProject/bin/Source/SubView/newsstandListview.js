
/**
Constructor
Do not call Function in Constructor.
*/
function newsstandListview()
{
	AView.call(this);

	this.data = null; 

}
afc.extendsClass(newsstandListview, AView);


newsstandListview.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

newsstandListview.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

newsstandListview.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


newsstandListview.prototype.setData = function(data) 
{     
    this.data = data; 

	console.log("this.data.content = ",this.data.content);
    this.content1.setText(this.data.content); 
	this.content1.setText(this.data.content); 
	this.content1.setText(this.data.content); 
	this.content1.setText(this.data.content); 
	this.content1.setText(this.data.content); 
	this.content1.setText(this.data.content); 
	
};  



/**
Constructor
Do not call Function in Constructor.
*/
function newsstand_listview()
{
	AView.call(this);

	this.data = null; 

}
afc.extendsClass(newsstand_listview, AView);


newsstand_listview.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

newsstand_listview.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

newsstand_listview.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


newsstand_listview.prototype.setData = function(data) 
{     
    this.data = data; 

    this.lbl001.setText(this.data.content); 
};  


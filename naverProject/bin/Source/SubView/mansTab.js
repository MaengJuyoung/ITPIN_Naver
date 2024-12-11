
/**
Constructor
Do not call Function in Constructor.
*/
function mansTab()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(mansTab, AView);


mansTab.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

mansTab.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

mansTab.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

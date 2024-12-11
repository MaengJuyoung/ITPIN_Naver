
/**
Constructor
Do not call Function in Constructor.
*/
function onePlusTab()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(onePlusTab, AView);


onePlusTab.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

onePlusTab.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

onePlusTab.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

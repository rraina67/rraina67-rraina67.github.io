//	Picture Viewer (PV_)
//	Scripts to create and animate a picture slideshow
//
//	HISTORY
//	19-Jun-2005	GenoPro			Created

function PV_PickCore(id, nDirection)
	{
	var oPicker = document.getElementById("idPVs_" + id);
	var cPictures = oPicker.options.length;	
	var iSelected = (oPicker.selectedIndex + cPictures + nDirection) % cPictures; 
	var strValue = oPicker.options[iSelected].value;
	var ich = strValue.indexOf('*');
	document.getElementById("idPVp_" + id).innerHTML = strValue.substring(0, ich);
	document.getElementById("idPVd_" + id).innerHTML = strValue.substring(ich + 1, strValue.length);
	oPicker.selectedIndex = iSelected;
	}

function PV_Next(id)
	{
	PV_PickCore(id, +1);
	}
function PV_Prev(id)
	{
	PV_PickCore(id, -1);
	}

var g_idTimer;	// Global variable to store the id of the timer, so we can stop it later

function PV_Stop(id)
	{
	// The id is not used, but passed for code orthogonality
	if (g_idTimer != null)
		clearTimeout(g_idTimer);
	g_idTimer = null;
	}

 // Start the picture slideshow to display a new picture every 3 second
function PV_Play(id)
	{
	PV_Stop(id);
	PV_Next(id);
	g_idTimer = setTimeout("PV_Play('" + id + "');", 3000);
	}


function ss(s){window.status=s;return true;}
function cs(){window.status='';}

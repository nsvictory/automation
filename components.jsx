cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//Dialogue Building Library
    //Creates Button
        function crtButton(grpName, myTxt, btName) {
            this[btName] = this[grpName].add("button", undefined, myTxt);
            return this
        }
    //Creates Checkbox
        function crtChck(grpName, chckTxt, chckName, showChck, defState) {
            this[chckName] = this[grpName].add("checkbox", undefined, chckTxt);
            this[chckName].visible = showChck;
            this[chckName].value = defState;
        }
    // Creates Dialogue Box
        function crtDia(diaName, title, prefW, prefY, marg) {
            this[diaName] = new Window('dialog', title, undefined, {closeButton:true})
            this[diaName].preferredSize = [prefW,prefY]
            this[diaName].margins = marg
        }
    //Creates Edit Text Box
        function crtEditTxt(grpName, editName, myText, width, height, multi, isActive) {
            this[editName + 'grp'] = this[grpName].add('group')
            this[editName + 'grp'].alignChildren = 'fill'
            this[editName + 'grp'].orientation = 'row'
            this[editName + 'grp'].alignment = 'left'
            this[editName + 'txt'] = this[editName + 'grp'].add("statictext", undefined, myText + ':', {multiline: false})
            this[editName + 'txt'].justify = 'right'
            this[editName] = this[editName + 'grp'].add("edittext", [0, 0, width, height], myText, {multiline: multi});
            this[editName].active = isActive;
        }
    //Creates Drop Down
        function crtDropDown(grp, cont, w, st, lst) {
            this[grp+'mn'] = this[grp].add('group')
            this[grp+'mn'].alignChildren = 'fill'
            this[grp+'mn'].alignment = 'left'
            this[grp+'mn'].orientation = 'row'
            this[grp+'mn'].preferredSize.width = w
                this[cont+'grpA'] = this[grp+'mn'].add('group')
                this[cont+'grpA'].alignChildren = 'fill'
                this[cont+'grpA'].alignment = 'left'
                this[cont+'grpA'].orientation = 'row'
                this[cont+'grpA'].preferredSize.width = 80
                staticText = this[cont+'grpA'].add('statictext', undefined, st +':', {multiline:false})
                staticText.justify = 'right'
                this[cont+'grpB'] = this[grp+'mn'].add('group')
                this[cont+'grpB'].alignChildren = 'fill'
                this[cont+'grpB'].alignment = 'right'
                this[cont+'grpB'].orientation = 'row'
                this[cont+'grpB'].preferredSize.width = w
                this[cont] = this[cont + 'grpB'].add("dropdownlist", [0,0,w,23])
                for (z = 0; z < lst.length; z ++) {
                    this[lst[z].set + '_itm'] = this[cont].add("item", lst[z].team)
                    this[lst[z].set + '_itm'].alignment = 'left'
                }
                this[cont].selection = initialTeam
        }
    //Creates Edit Text Group
        function crtEdTxtGrp(grp, cont, w, list) {
            this[cont+'grp'] = this[grp].add('group')
            this[cont+'grp'].alignChildren = 'fill'
            this[cont+'grp'].alignment = 'left'
            this[cont+'grp'].orientation = 'column'
            this[cont+'grp'].preferredSize.width = w
            for (x = 0; x < list.length; x ++) {
                this[cont+'mn'] = this[cont+'grp'].add('group')
                this[cont+'mn'].alignChildren = 'fill'
                this[cont+'mn'].alignment = 'left'
                this[cont+'mn'].orientation = 'row'
                this[cont+'mn'].preferredSize.width = w
                    this[cont+'grpA'] = this[cont+'mn'].add('group')
                    this[cont+'grpA'].alignChildren = 'fill'
                    this[cont+'grpA'].alignment = 'left'
                    this[cont+'grpA'].orientation = 'row'
                    this[cont+'grpA'].preferredSize.width = 80
                    staticText = this[cont+'grpA'].add('statictext', undefined, list[x] +':', {multiline:false})
                    staticText.justify = 'right'
                    this[cont+'grpB'] = this[cont+'mn'].add('group')
                    this[cont+'grpB'].alignChildren = 'fill'
                    this[cont+'grpB'].alignment = 'right'
                    this[cont+'grpB'].orientation = 'row'
                    this[cont+'grpB'].preferredSize.width = w
                    this[list[x]+'_ed'] = this[cont+'grpB'].add('edittext',  [0,0,w,23], '', {multiline:false})
            }
        }
    //Creates Dialogue Group
        function crtGrp(parentName, grpName, orien, type, marg, space, childAlign, panelTitle) {
            this[grpName] = this[parentName].add(type, undefined, panelTitle);
            this[grpName].alignment = childAlign;
            this[grpName].alignChildren = 'left';
            this[grpName].orientation = orien;
            this[grpName].margins = marg;
            this[grpName].spacing = space;
        }
    //Creates Dialogue Image
        function crtImg(tabName, grpName, fileTitle, nm) {
            if (File(fileTitle).exists === false) {  
               //alert(fileTitle + ' - does not exist.');
            } else {
                this[nm] = this[tabName].add("image", undefined, File(fileTitle));
            }
        }
    //Creates Radio Button
        function crtRadio(grpName, chckTxt, chckName, showChck) {
            this[chckName] = this[grpName].add("radiobutton", undefined, chckTxt);
            this[chckName].visible = showChck;
        }
    //Creates Static Text
        function staText(grpName, text, sizeTxt, width, height, just, multi, nm) {
            this[grpName+ nm] = this[grpName].add("statictext", undefined, text, {multiline: multi});
            if (sizeTxt) {this[grpName+"_txt"].size = [width,height]}
            this[grpName+nm].justify = just;
            this[grpName+nm].graphics.font = 'dialog:'+height+"'";
        }
    //Shows Dialogue Box
        function shwDlg(nme, nm, num) {
            if (nm == null) {
            } else {
            this[nm].selection = num
            }
            this[nme].show()
        }
    //Creates Tabbed Panel
        function crtPnl(grpParent, myName, prefX, prefY, marg) {
            this[myName] = this[grpParent].add("tabbedpanel");
            this[myName].preferredSize =[prefX,prefY];
            this[myName].margins = marg;
        }
    //Creates Panel Tab
        function crtTb(tabName, tabPanel) {
            this[tabName] = this[tabPanel].add ("tab", undefined, tabName);
            this[tabPanel].selection = 0;
        }
    //Creates The Products Groups
        function setProducts(tbNm, grpNm, flPth) {
            chFld = Folder(flPth)
            flFls = chFld.getFiles()
            crtGrp('Products', 'prdLoaderMn', 'column', 'group', 0, 0, 'left', 'what')
            for (q = 0; q < rwsClms[1]; q ++) {
                crtGrp('prdLoaderMn', 'prdLoader' + q, 'row', 'group', 0, 0, 'left', 'prdLoader' + q)
                //staText('prdLoader' + q,  'prdLoader' + q, 0, 15, 15, 'left', false, 'tm')
            }
            for (p = 0; p < flFls.length; p ++) {
                prdNm = flFls[p].name.replace('.png', '')
                if (File(drvLoc + d + srcFld + d + scriptsFld + d + indFls + d + prdNm + '.jsx').exists === false) {
                } else {
                    prodsDisplay.push(prdNm)
                    //THIS PLACES THE PRODUCT BUTTON INTO THE GROUP WHICH THEN DISPLAYS
                    crtPrdBt('pnlLoader', prdNm, flFls[p], p)
                    if (cancelClick) {
                        addRemoveProdFromList(flFls[p].name.replace('.png', '') + '_ico', 'Products');
                    }
                }
            }
        }
    //Creates Product Button
        function crtPrdBt(pnlNm, btNm, flLoc, ind) {
            cancelClick = true
            ind = ind + 1
            if (ind == 0 || ind <= rwsClms[0]) {
                grpNum = 'prdLoader0'
            } else if (ind == rwsClms[0]+1 || ind <= rwsClms[0]*2) {
                grpNum = 'prdLoader1'
            } else if (ind == rwsClms[0]*2+1 || ind <= rwsClms[0]*3) {
                grpNum = 'prdLoader2'
            } else if (ind == rwsClms[0]*2+2 || ind <= rwsClms[0]*4) {
                grpNum = 'prdLoader3'
            } else if (ind == rwsClms[0]*2+3 || ind <= rwsClms[0]*5) {
                grpNum = 'prdLoader4'
            } else {
                grpNum = 'prdLoader5'
            }

            crtGrp(grpNum, btNm, 'column', 'group', 10, 0, 'top')
            //staText(btNm, ind, 0, 15, 15, 'left', false, 'tm')
            //staText(btNm, btNm + ' ' + ind, 0, 15, 15, 'left', false, 'tm')
            this[btNm + '_ico'] = this[btNm].add ("iconbutton", undefined, ScriptUI.newImage (flLoc,flLoc,flLoc,flLoc), {style: "toolbutton", toggle: true, name:'thing'})
        }


//Baggins Functions Library
    //Change Edit Inputs Based On Drop Down Change
        function changeInputs(ind) {
           Team_ed.text = myAr[ind].team
            Set_ed.text = myAr[ind].set
            Affiliation_ed.text = myAr[ind].aff
            Url_ed.text = myAr[ind].url
            Est_ed.text = myAr[ind].est
            Short_ed.text = myAr[ind].shortname
            ShortL_ed.text = myAr[ind].shortL
            Mascot_ed.text = myAr[ind].mascot
            MascotL_ed.text = myAr[ind].mascL
            ColorA_ed.text = myAr[ind].colorA
            ColorB_ed.text = myAr[ind].colorB
            HexA_ed.text = myAr[ind].hexA
            HexB_ed.text = myAr[ind].hexB
            HexC_ed.text = myAr[ind].hexC
            HexD_ed.text = myAr[ind].hexD
        }
    //Pulls Team Data Based On Index
        function pullTeamInfoIndex(ind, getAll) {
            tmTeam = ind.team
            tmUrl = ind.url
            tmSet = ind.set
            tmAff = ind.aff
            tmShort = ind.shortname
            tmShortL = ind.shortL
            tmMascot = ind.mascot
            tmMascotL = ind.mascL
            tmEst = ind.est
            tmPantA = ind.colorA
            tmPantB = ind.colorB 
            tmHexA = ind.hexA
            tmHexB = ind.hexB
            tmHexC = ind.hexC
            tmHexD = ind.hexD
            teamInfo = 'Team: ' + tmTeam + '\n' + 
                'Site URL: ' + tmUrl + '\n' + 
                'Set: ' + tmSet + '\n' + 
                'Aff: ' + tmAff + '\n' + 
                'Short Name: ' + tmShort + '\n' +  
                'Short Legal: ' + tmShortL + '\n' + 
                'Mascot: ' + tmMascot + '\n' + 
                'Mascot Legal: ' + tmMascotL + '\n' + 
                'Est. Date: ' + tmEst + '\n' +  
                'Pantone A: ' + tmPantA + '\n' +  
                'Pantone B: ' + tmPantB + '\n' +
                'Hex A: ' + tmHexA + '\n' +
                'Hex B: ' + tmHexB + '\n' +
                'Hex C: ' + tmHexC + '\n' +
                'Hex D: ' + tmHexD
            if (getAll) return alert(teamInfo)
        }
    //Pulls Team Data Based On Index
        function pullTeamInfoSet(aa) {
            for (s = 0; s < this[teams].length; s ++) {
                if (this[teams][s].set == aa) {
                    pullTeamInfoIndex(this[teams][s], false)
                    changeInputs(s)
                    chsTm.selection = s
                }
            }
        }
    //Import JS File
        function importJSF(f) {
            var dlgConstruction = File(f)
            var dlgConsScript = '#include' + dlgConstruction.fullName
            eval(dlgConsScript)
        }
    //Load JSON File
        function loadJsonFile(fl, ar) {
            var scriptFile = File(fl)
            scriptFile.open('r') 
            var content  = scriptFile.read()
            scriptFile.close(); 
            this[ar] = eval(content)
            this[ar].sort()
        }
    //Test Alert Message
        function tstAlert(myAl) {
            alert(myAl)
        }
    // Add and Removes Products From Production Line
        function addRemoveProdFromList(id,nm) {
            this[id].onClick = function() {
                if (this.value == true) {
                    selectedProducts.push({tab:nm,prod:id});
                } else {
                    for(var i = selectedProducts.length - 1; i >= 0; i--) {
                        if(selectedProducts[i].prod === id) {
                            selectedProducts.splice(i, 1);
                        }
                    }
                }
            }
        }

    //Runs Through Each Selected Prod
        function MainBaggins(lis) {
            if (lis.length == 0) {
                alert(txtB)
            } else {
                pullTeamInfoIndex(myAr[initialTeam], false)
                for (r = 0; r < lis.length; r ++) {
                    pd = lis[r].prod.replace('_ico', '')

                    srcPdFle = prdSrc + pd + '_Src.psd'
                    prdIndFle = indPrdJS + pd + '.jsx'
                    checkPrdSrc = (File(srcPdFle).exists === false) ? alert(txtE) : RunPrd(pd, srcPdFle, prdIndFle)
                    //closeActive(false)
                }
                diaOpen = (stOpn.value == false) ? this[diaNm].close()  : 'nope'
                
            }
        }
    //Runs Indivudual JSX files
        function RunPrd(pd, srcPdFle, prdIndFle) {
            determineLogo(chsLogo)
            openFile(srcPdFle)
            importJSF(prdIndFle)
            Corban(pd)
            makeJPG = (svJPG.value == true) ? saveJPG(jpgFlds + pd + d + tmAff + d, tmAff + u + pd + u + tmSet) : 'August Burns Red Rules!' 
        }
    //Open Product SRC and JSX
        function OpenRunPrd(srcPdFle, prdIndFle) {
            openFile(srcPdFle)
            importJSF(prdIndFle)
            makeJPG = (svJPG.value == true) ? saveJPG(jpgFlds + pd + d + tmAff + d, tmAff + u + pd + u + tmSet) : 'August Burns Red Rules!'
        }
    //Determines Logo Usage
        function determineLogo(a) {
            flType = '.ai'
            switch(a) {
                case 'Prim1':
                logoSrc = lgoFld + d + 'prim' + d + tmSet + u + a + flType
                break;
                case 'Prim2':
                case 'Prim3':
                case 'Prim4':
                case 'Sec1':
                case 'Sec2':
                case 'Sec3':
                case 'Tert1':
                case 'Tert2':
                case 'Word2':
                case 'Word3':
                logoSrc = lgoFld + d + 'various' + d + tmSet + u + a + flType
                break;
            }
        }
//Product Creation Functions Library
function fillMask(myColor) {
    var ColorA = new SolidColor;
    ColorA.rgb.hexValue = myColor;
    app.activeDocument.selection.fill(ColorA);
    app.activeDocument.selection.deselect();
}
function alignMyLayers(a, b, c, d) {
    selectMainLayer(a)
    getTrans(b)
    for (i = 0; i < c.length; i ++) {
        selectAlignAll(c[i])
    }
    desLayers = (d) ? deselectLayers() : 'nope'
    noSelection()
}
function placeLogo(src, logo) {
    cTID = function(s) { return app.charIDToTypeID(s); };
    sTID = function(s) { return app.stringIDToTypeID(s); };
    var placedImage = new ActionDescriptor();
    placedImage.putPath(cTID('null'), new File(src+ logo));
    executeAction(cTID('Plc '), placedImage, DialogModes.NO);
}
function placeLogoB(src, logo) {
    var dialogMode = (DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(sTID("selection"), sTID("pdfSelection"), cTID('page'));
    desc2.putInteger(cTID('PgNm'), 1);
    desc2.putEnumerated(cTID('Crop'), sTID("cropTo"), sTID("boundingBox"));
    desc2.putBoolean(sTID("suppressWarnings"), false);
    desc2.putBoolean(cTID('AntA'), true);
    desc2.putBoolean(cTID('ClPt'), true);
    desc1.putObject(cTID('As  '), sTID("PDFGenericFormat"), desc2);
    desc1.putInteger(cTID('Idnt'), 33);
    desc1.putPath(cTID('null'), new File(src+ logo));
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc3 = new ActionDescriptor();
    desc3.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -1.13686837721616e-13);
    desc3.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc3);
    desc1.putBoolean(cTID('AntA'), true);
    executeAction(cTID('Plc '), desc1, dialogMode);
}
function selectMainLayer(a) {
    var dialogMode = DialogModes.NO
    var desc1 = new ActionDescriptor()
    var ref1 = new ActionReference()
    ref1.putName(cTID('Lyr '), a)
    desc1.putReference(cTID('null'), ref1)
    desc1.putBoolean(cTID('MkVs'), false)
    var list1 = new ActionList()
    list1.putInteger(130)
    desc1.putList(cTID('LyrI'), list1)
    executeAction(cTID('slct'), desc1, dialogMode)
}
function getTrans(tr) {
    var dialogMode = DialogModes.NO
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Trsp'));
    ref2.putName(cTID('Lyr '), tr);
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
}
function selectAlignAll(a) {
    // ADSLefts, ADSRights, ADSCentersH, ADSCentersV, ADSTops, ADSBottoms 
    var dialogMode = DialogModes.NO
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('Usng'), cTID('ADSt'), sTID(a));
    desc1.putBoolean(sTID("alignToCanvas"), false);
    executeAction(cTID('Algn'), desc1, dialogMode);
}
function deselectLayers() {   
    var desc01 = new ActionDescriptor();   
    var ref01 = new ActionReference();   
    ref01.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );   
    desc01.putReference( charIDToTypeID('null'), ref01 );   
    executeAction( stringIDToTypeID('selectNoLayers'), desc01, DialogModes.NO );   
}

function noSelection() {
    var dialogMode = (DialogModes.NO)
    var desc1 = new ActionDescriptor()
    var ref1 = new ActionReference()
    ref1.putProperty(cTID('Chnl'), sTID("selection"))
    desc1.putReference(cTID('null'), ref1)
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'))
    executeAction(cTID('setd'), desc1, dialogMode)
}
    //Close Active Documnet
        function closeActive(det) {
            aiDocument = app.activeDocument;
            (det) ? aiDocument.close(SaveOptions.SAVECHANGES) : aiDocument.close(SaveOptions.DONOTSAVECHANGES);
            aiDocument = null;
        }
    //Make Layer Active
        function selectLayer(a) {
            doc = app.activeDocument
            myLay = doc.activeLayer = doc.artLayers.getByName(a)
        }
    //Deselects Layer
        function desLayers() {   
            var desc01 = new ActionDescriptor();   
            var ref01 = new ActionReference();   
            ref01.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );   
            desc01.putReference( charIDToTypeID('null'), ref01 );   
            executeAction( stringIDToTypeID('selectNoLayers'), desc01, DialogModes.NO );   
        }
    //Make Layer into a Masked Layer
    function makeMask() {
        var dialogMode = (DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        executeAction(sTID('groupEvent'), desc1, dialogMode);
    }
    function openSmrt() {
        var dialogMode = (DialogModes.NO)
        var desc1 = new ActionDescriptor()
        executeAction(sTID('placedLayerEditContents'), desc1, dialogMode)
    }
    //Get Dimensions Of Layer
        function getDimen(layerName, varName) {
            doc = app.activeDocument
            myLay = doc.activeLayer = doc.artLayers.getByName(layerName)
            this[varName + 'H'] = myLay.bounds[3]-myLay.bounds[1]
            this[varName + 'W'] = myLay.bounds[2]-myLay.bounds[0]
            this[varName + 'WP'] = this[varName + 'W']/doc.width*100
            this[varName + 'HP'] = this[varName + 'H']/doc.height*100
        }
    //Place Asset
        function plcSmrt(src) {
            cTID = function(s) { return app.charIDToTypeID(s); }
            sTID = function(s) { return app.stringIDToTypeID(s); }
            var placedImage = new ActionDescriptor()
            placedImage.putPath(cTID('null'), new File(src))
            executeAction(cTID('Plc '), placedImage, DialogModes.NO)
        }
    //Saves Out A PSD File
        function savePSD(printFileLoc, pd, fileName) {
            var mkFld = new Folder(printFileLoc + pd);
            chFld = (!mkFld.exists) ? mkFld.create() : 'folder exists'
            doc = app.activeDocument
            saveFile = File(printFileLoc + pd + d + fileName)
            psdSaveOptions = new PhotoshopSaveOptions()
            psdSaveOptions.embedColorProfile = true
            psdSaveOptions.alphaChannels = true
            activeDocument.saveAs(saveFile, psdSaveOptions, true, Extension.LOWERCASE)
        }
    //Open File In Photoshop
        function openFile(fl) {
            var fileRef = new File(fl)
            app.open(fileRef)
            doc = app.activeDocument
        }
    //Fill Colors
        function fillColors(hexA, hexB) {
            selectTran('cA')
            fillMask(hexA)
            selectTran('cB')
            fillMask(hexB)
        }
    function copyLay() {
        var dialogMode = (DialogModes.NO);
        executeAction(sTID('copyToLayer'), undefined, dialogMode);
    }
    //Selects Layer Transparency
        function selectTran(sel, fl) {
            doc = app.activeDocument
            if (!fl) {
            doc.activeLayer = doc.activeLayer =  doc.artLayers.getByName(sel)
            } else {
            doc.activeLayer = doc.activeLayer =  doc.layerSets.getByName(fl).artLayers.getByName(sel)
            }
            var idChnl = charIDToTypeID( "Chnl" )
            var actionSelect = new ActionReference()
            actionSelect.putProperty( idChnl, charIDToTypeID( "fsel" ));    
            var actionTransparent = new ActionReference()
            actionTransparent.putEnumerated( idChnl, idChnl, charIDToTypeID( "Trsp" ))
            var actionDesc = new ActionDescriptor()
            actionDesc.putReference( charIDToTypeID( "null" ), actionSelect )
            actionDesc.putReference( charIDToTypeID( "T   " ), actionTransparent)
            executeAction( charIDToTypeID( "setd" ), actionDesc, DialogModes.NO)
        }
    //Fills Selection With Assigned Color
        function fillMask(myColor) {
            var ColorA = new SolidColor;
            ColorA.rgb.hexValue = myColor;
            app.activeDocument.selection.fill(ColorA);
            app.activeDocument.selection.deselect();
        }



    //Places File Onto Canvas

    //Scale Selected Layer to Match Size of Guided Layer
        function scaleLogoWithGuide(a, b) {
            getDimen(layerName=a, varName=a)
            getDimen(layerName=b, varName=b)
            myScaleSize = this[b+'W']/this[a+'W']*100
            selectLayer(a)
            var startRulerUnits = app.preferences.rulerUnits
            app.preferences.rulerUnits = Units.PERCENT
            doc.activeLayer.resize(myScaleSize, myScaleSize, AnchorPosition.MIDDLECENTER)
            app.preferences.rulerUnits = startRulerUnits
            getDimen(layerName=a, varName=a)
            app.preferences.rulerUnits = Units.PIXELS
            myScaleSize = (this[a+'H'] >= this[b+'H']) ? this[b+'H']/this[a+'H']*100 : 100
            selectLayer(a)
            var startRulerUnits = app.preferences.rulerUnits
            app.preferences.rulerUnits = Units.PERCENT
            doc.activeLayer.resize(myScaleSize, myScaleSize, AnchorPosition.MIDDLECENTER)
            app.preferences.rulerUnits = startRulerUnits
        }
    //Deletes Top Layer Only
        function deleteTopLay() {
            doc = app.activeDocument
            delLayer = doc.artLayers[0]
            delLayer.remove()
        }
    //Delete Specified Layer Only
        function deleteLay(lay) {
            doc = app.activeDocument;
            for (i = 0; i < app.activeDocument.layers.length; i ++) {
                if (app.activeDocument.layers[i].name == lay) {
                    delLayer = doc.artLayers.getByName(lay)
                    delLayer.remove()
                }
            }
        }
    //Delete specific layer
        function deleteLayer(layer, folderName) {
            doc = app.activeDocument
            if (folderName == '') {
                delLayer = doc.activeLayer = doc.artLayers.getByName(layer)
            } else {
                delLayer = doc.activeLayer = doc.layerSets.getByName(folderName).artLayers.getByName(layer)
            }
            delLayer.remove()
        }
    //Creates Print File
        function crtPrintFl(fldNm, pd) {
            var mkFld = new Folder(fldNm);
            chFld = (!mkFld.exists) ? mkFld.create() : 'folder exists'
            savePSD(fldNm + d + pd)
        }
    //Replace Smart Object With File
        function repAI(placeLg, layer) {
            selectLayer(layer)
            var dialogMode = (DialogModes.NO);
            var desc1 = new ActionDescriptor();
            desc1.putPath(cTID('null'), new File(placeLg));
            desc1.putInteger(cTID('PgNm'), 1);
            desc1.putInteger(cTID('Crop'), 1);
            executeAction(sTID('placedLayerRelinkToFile'), desc1, dialogMode);
        }
        function repSmrt(src, rpLay) {
            doc = app.activeDocument
            var assetPath = 'Prism_AB/'
            var idplacedLayerRelinkToFile = stringIDToTypeID( 'placedLayerRelinkToFile' )
            var primSrc = new ActionDescriptor()
            var idnull = charIDToTypeID( 'null' )
            app.preferences.rulerUnits = Units.PIXELS;
            primSrc.putPath( idnull, new File(src))
            doc.activeLayer = doc.artLayers.getByName(rpLay)
            var idPgNm = charIDToTypeID( 'PgNm' )
            primSrc.putInteger( idPgNm, 0 )
            executeAction(idplacedLayerRelinkToFile, primSrc, DialogModes.NO)
        }
    //Open Smart Layer
        function opnSmrt(lay) {
            doc = app.activeDocument
            doc.activeLayer = doc.artLayers.getByName(lay);
            sTID = function(s) { return app.stringIDToTypeID(s); }
            var dialogMode = DialogModes.NO
            var desc1 = new ActionDescriptor()
            executeAction(sTID('placedLayerEditContents'), desc1, dialogMode)
        }
    //Save JPG File
        function saveJPG(loc, fn, q) {
            var mkFld = new Folder(loc)
            chFld = (!mkFld.exists) ? mkFld.create() : 'folder exists'
            var saveOptions = new JPEGSaveOptions( )
            saveOptions.embedColorProfile = true
            saveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE
            saveOptions.matte = MatteType.NONE
            saveOptions.quality = 10
            app.activeDocument.saveAs(new File(loc + fn), saveOptions, true)
        }
        function sfwPNG24(loc, fn, q){
            var mkFld = new Folder(loc)
            chFld = (!mkFld.exists) ? mkFld.create() : 'folder exists'
            var pngOpts = new ExportOptionsSaveForWeb 
            pngOpts.format = SaveDocumentType.PNG  
            pngOpts.PNG8 = false
            pngOpts.transparency = true 
            pngOpts.interlaced = false
            pngOpts.quality = 100
            activeDocument.exportDocument(new File(loc + fn + '.png'),ExportType.SAVEFORWEB,pngOpts) 
        }  
    function flattenLay() {
        cTID = function(s) { return app.charIDToTypeID(s); };
        sTID = function(s) { return app.stringIDToTypeID(s); };
        var dialogMode = (DialogModes.NO)
        executeAction(sTID('flattenImage'), undefined, dialogMode)
    }

function makePreview(a, b) {
    doc = app.activeDocument
    if (!b) { nothingHappens = 'nothing' } else { flattenLay() }
    doc.resizeImage(null,UnitValue(100,"px"),null,ResampleMethod.BICUBIC)
    sfwPNG24(prdDisLoc, pd+a+u+tmSet+u+'PD')
    doc.activeHistoryState = doc.historyStates[doc.historyStates.length-2];
    app.purge(PurgeTarget.HISTORYCACHES)
    doc = app.activeDocument
    doc.resizeImage(null,UnitValue(600,"px"),null,ResampleMethod.BICUBIC)
    sfwPNG24(prdDisLoc, pd+a+u+tmSet+u+'M')
    if (!b) {     doc.activeHistoryState = doc.historyStates[doc.historyStates.length-2]; } else {     doc.activeHistoryState = doc.historyStates[doc.historyStates.length-3]; }

    app.purge(PurgeTarget.HISTORYCACHES)
}

function smartOpen(lay) {
    doc = app.activeDocument
    myLay = doc.activeLayer = doc.artLayers.getByName(lay)
    cTID = function(s) { return app.charIDToTypeID(s); };
    sTID = function(s) { return app.stringIDToTypeID(s); };
    var dialogMode = (false ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('placedLayerEditContents'), desc1, dialogMode);
}
function editSmart() {
    var dialogMode = (DialogModes.NO)
    var desc1 = new ActionDescriptor()
    executeAction(sTID('placedLayerEditContents'), desc1, dialogMode);
}

function repAILogo(src) {
    cTID = function(s) { return app.charIDToTypeID(s); };
    sTID = function(s) { return app.stringIDToTypeID(s); };
    var dialogMode = (false ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putPath(cTID('null'), new File(src));
    desc1.putInteger(cTID('PgNm'), 1);
    desc1.putInteger(cTID('Crop'), 1);
    executeAction(sTID('placedLayerRelinkToFile'), desc1, dialogMode);
}
function GetIt(time) {
    time = time.split(':')
    var hours = Number(time[0]);
    var minutes = Number(time[1]);
    var seconds = Number(time[2]);
    var timeValue;
    //timeValue = (hours > 0 && hours <= 12) ? "" + hours : (hours > 12) ? "" + (hours - 12) : 
    if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
    } else if (hours > 12) {
        timeValue= "" + (hours - 12);
    } else if (hours == 0) {
        timeValue= "12";
    }
    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    //timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
    timeValue += (hours >= 12) ? " pm" : " am";  // get AM/PM
    return timeValue
}

function convertMonth(mon) {
    myMonth = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(mon) / 3 + 1
    return myMonth
}


function disLogo(lgoSrc, lgo, set, grp, row) {
    newLgo = (lgo == 'WordB') ? 'WordB' : lgo
    pFl = pngLgFld + set + u + newLgo + '.png'
    if (File(lgoSrc).exists === true) {
        // GETS LOGO PRINT IMAGE INFO
        chosenFileSrcB = File(lgoSrc)
        dateModifiedB = chosenFileSrcB.modified.toString()
        fileDayB = dateModifiedB.split(' ')[0]
        fileMonthB = dateModifiedB.split(' ')[1]
        fileDateB = dateModifiedB.split(' ')[2]
        fileYearB = dateModifiedB.split(' ')[3]
        fileTimeB = dateModifiedB.split(' ')[4]
        dateModB = fileMonthB + ' ' + fileDateB + ' ' + fileYearB
        aiFileDisplay = convertMonth(fileMonthB) + fileDateB + fileYearB + fileTimeB.replace(/\:/g, '')
        var primR = hexToRgb(HexA_ed.text).r/255
        var primG = hexToRgb(HexA_ed.text).g/255
        var primB = hexToRgb(HexA_ed.text).b/255
        var secR = hexToRgb(HexB_ed.text).r/255
        var secG = hexToRgb(HexB_ed.text).g/255
        var secB = hexToRgb(HexB_ed.text).b/255
        
        var woodR = hexToRgb("95613b").r/255
        var woodG = hexToRgb("95613b").g/255
        var woodB = hexToRgb("95613b").b/255 
        
        crtGrp(grp, grp+'gp', 'column', 'group', 15, 0, 'center', grp+'_gp')
        if (File(pFl).exists === true) {
            chosenFileSrc = File(pFl)
            dateModified = chosenFileSrc.modified.toString()
            fileDay = dateModified.split(' ')[0]
            fileMonth = dateModified.split(' ')[1]
            fileDate = dateModified.split(' ')[2]
            fileYear = dateModified.split(' ')[3]
            fileTime = dateModified.split(' ')[4]
            dateMod = fileMonth + ' ' + fileDate + ' ' + fileYear
            pngDisplayFile = convertMonth(fileMonth) + fileDate + fileYear + fileTime.replace(/\:/g, '')
            detMod = (pngDisplayFile <= aiFileDisplay) ? 'OUT OF DATE' : 'UP-TO-DATE'
            
            staText(grp+'gp', detMod, 0, 10, 10, 'left', false, 'detMod')
            crtGrp(grp+'gp', grp+'gpImg', 'column', 'group', 5, 0, 'center', grp+'_gp')
                crtImg(grp+'gpImg', grp+'_'+lgo, pFl, grp+lgo)
            crtButton(grp+'gp', 'Edit ' + lgo, lgo+'bt')
            if (lgo == 'Prim1' || lgo == 'Word1') {
               this[grp+'gpImg'].graphics.backgroundColor = this[grp+'gpImg'].graphics.newBrush (this[grp+'gpImg'].graphics.BrushType.SOLID_COLOR, [primR, primG, primB])
            } else  if (lgo == 'Prim2'|| lgo == 'Word2') {
               this[grp+'gpImg'].graphics.backgroundColor = this[grp+'gpImg'].graphics.newBrush (this[grp+'gpImg'].graphics.BrushType.SOLID_COLOR, [secR, secG, secB])
            } else if (lgo == 'Prim3' || lgo == 'Sec3' || lgo == 'Tert3' || lgo == 'Word3' || lgo == 'WordB' || lgo == 'WordW' || lgo == 'PrimB' || lgo == 'PrimW' ) {
               this[grp+'gpImg'].graphics.backgroundColor = this[grp+'gpImg'].graphics.newBrush (this[grp+'gpImg'].graphics.BrushType.SOLID_COLOR, [woodR, woodG, woodB])
            }

            if (row == 'Word') {
                this[grp+lgo].onClick = function() {
                    initLogoB = lgo
                    chosenLgoinitLgoB.text = 'Chosen Word - ' + initLogoB
                }
            } else {
                this[grp+lgo].onClick = function() {
                    initLogo = lgo
                    chosenLgoinitLgo.text = 'Chosen Logo - ' + initLogo
                }
            }
            this[ lgo+'bt' ].onClick = function() {
                if (lgo == 'WordW' || lgo == 'PrimW') {
                    openFile(lgoSrc)
                } else {
                openFile(rootFld + d + assetsFld + d + 'LogoEditor.psd')
                doc = app.activeDocument
                repAI(lgoFld + d + 'complete' + d + set + u + lgo + '.ai', 'logo') 
                editSmart()
                closeActive(false)
                }
            }
        } else {
            crtGrp(grp, grp+'gp', 'column', 'group', 5, 0, 'center', grp+'_gp')
                mySrc = rootFld + assetsFld + d + imgB
                this[lgo + '_ico'] = this[grp+'gp'].add ("iconbutton", undefined, ScriptUI.newImage (mySrc,mySrc,mySrc,mySrc), {style: "toolbutton", toggle: true, name:'thing'})
                staText(grp+'gp', lgo + ' DISPLAY NA', 0, 10, 10, 'left', false, 'dsNA')
        }
    }
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
    } : null;
}
function logoEditor(init) {
    pullTeamInfoIndex(myAr[init], false)
    crtDia('logoEdit', 'Logo Editor', 50, 50, 0)
        crtGrp('logoEdit', 'logosTxt', 'row', 'group', 10, 10, 'center', 'hey')
            staText('logosTxt', tmTeam + ' Logos', 0, 20, 20, 'left', false, 'tm')
        crtGrp('logoEdit', 'chosenLgo', 'row', 'group', 0, 0, 'center', 'hey')
            staText('chosenLgo', 'Chosen Logo - ' + initLogo, 0, 15, 15, 'left', false, 'initLgo')
        crtGrp('logoEdit', 'logosA', 'row', 'group', 0, 0, 'center', '')
        crtGrp('logoEdit', 'logosB', 'row', 'group', 0, 0, 'center', '')
            staText('chosenLgo', 'Chosen Word - ' + 'Word1', 0, 15, 15, 'left', false, 'initLgoB')
        crtGrp('logoEdit', 'logosC', 'row', 'group', 0, 0, 'center', '')
        for (l = 0; l < pullLogo.length; l ++) {
            fileTag = (pullLogo[l] == 'PrimW') ? '.psd' : (pullLogo[l] == 'WordW') ? '.psd' : '.ai'
            pdLg = pullLogo[l]
            if (pdLg == 'Prim1' || pdLg == 'Prim2' || pdLg == 'Prim3' || pdLg == 'Prim4' || pdLg == 'Sec1' || pdLg == 'Sec2' || pdLg == 'Sec3' || pdLg == 'Tert1'  || pdLg == 'Tert2' || pdLg == 'Word1' || pdLg == 'Word2') {
                disLogo(lgoFld + d + 'complete' + d + tmSet + u + pdLg + fileTag, pdLg, tmSet, 'logosA', 'Prim')
            }
            if (pdLg == 'Word1' || pdLg == 'Word2' || pdLg == 'Word3' || pdLg == 'Word4' || pdLg == 'Word5') {
                disLogo(lgoFld + d + 'complete' + d + tmSet + u + pdLg + fileTag, pdLg, tmSet, 'logosB', 'Word')
            }
            disB = (pullLogo[l] == 'PrimW' || pullLogo[l] == 'PrimB' || pullLogo[l] == 'WordW' || pullLogo[l] == 'WordB') 
            ?            
            disLogo(lgoFld + d + 'complete' + d + tmSet + u + pullLogo[l] + fileTag, pullLogo[l], tmSet, 'logosC')
            :
            ''  
        }
    shwDlg('logoEdit', null, 0)
}

function teamProducts(init) {
    crtDia('teamProductsMaker', 'Team Products', 50, 50, 0)
        crtGrp('teamProductsMaker', 'teamTxt', 'row', 'group', 10, 10, 'center', 'hey')
            staText('teamTxt', tmSet + ' Products', 0, 20, 20, 'left', false, 'tm')
        crtGrp('teamProductsMaker', 'prdA', 'row', 'group', 10, 0, 'center', '')
        crtGrp('teamProductsMaker', 'prdA', 'row', 'group', 10, 0, 'center', '')
        //crtGrp('teamProductsMaker', 'prdA', 'row', 'group', 10, 0, 'center', '')
        //crtGrp('teamProductsMaker', 'prdA', 'row', 'group', 10, 0, 'center', '')
    myfolder = Folder(prdDisLoc)
    myFiles = myfolder.getFiles()
    for (k = 0; k < prodsDisplay.length; k++) {
        crtGrp('prdA', prodsDisplay[k], 'column', 'group', 10, 10, 'center', '')
        staText(prodsDisplay[k], prodsDisplay[k], 0, 15, 15, 'center', false, 'tm')
        crtImg(prodsDisplay[k], prodsDisplay[k]+'img', prdDisLoc + prodsDisplay[k] + '_' + tmSet+'_PD.png', 'prdssA')
    }
    shwDlg('teamProductsMaker', null, 0)
}















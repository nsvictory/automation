#target photoshop

var dlgConstruction = File('G:/AutoDev/Baggins/components.jsx') // Import Components from file
var dlgConsScript = '#include' + dlgConstruction.fullName
eval(dlgConsScript)
teams = 'teamCollection' // The Array where I retrieve all team data
loadJsonFile('G:/AutoDev/Scripty/newSchoolDataB.txt', teams) // The source of all team data
printFilleLoc = 'G:/AutoDev/Baggins/PrintFiles/' // The location of the print files
mockupFileLoc = 'G:/AutoDev/Baggins/F_' // The location of the mockup files
logoFolder = 'G:/AutoDev/Scripty/prim' // Folder where logo files are found - prim or various
initLogo = 'Prim1'
d = '/'
u = '_'
productName = 'Nathan' //The Product Name of  your run
sourceFileLoc = '~/Desktop/'
openFile(sourceFileLoc+productName+'Smrt.psd') //Opens up the source of the print and mock files - always end file with Smrt and it must be a psd file

generateFiles(
    determineColorA=true, 
        applyColorALayers = [
            {layerSet:'cA', folderSet:''}
        ],
    determineColorB = true,
        applyColorBLayers = [
            {layerSet:'cB', folderSet:''}
        ],
    determineLogo = true,
    applyLogoLayers =  {layerSet:'logo', folderSet:'namedFolder'},
    determinePrintFile = false,
    determineFileSEO = false
)


function generateFiles(determineColorA, determineColorB, applyColorALayers, applyColorBLayers, determineLogo, applyLogoLayers, determinePrintFile ) {
    doc = app.activeDocument
    for (mm = 0; mm < teamCollection.length; mm ++) {
        
        tmAff = teamCollection[ mm ].aff
        tmSet =teamCollection[ mm ].set
        tmHexA = teamCollection[ mm ].hexA
        tmHexB = teamCollection[ mm ].hexB
        tmTeam = teamCollection[ mm ].team
        outputFileName = tmAff + u + productName  + u + tmSet
        if (tmAff == 'NFL') {
        if (determineColorA) {
            for (ca = 0; ca < this.applyColorALayers.length; ca ++) {
               caLayer = this.applyColorALayers[ca].layerSet
               caFold = this.applyColorALayers[ca].folderSet
               runColors = doc.activeLayer = doc.activeLayer = (caFold == '') ?  doc.artLayers.getByName(caLayer) :  doc.layerSets.getByName(caFold).artLayers.getByName(caLayer)
               selectTran(caLayer, caFold)
               fillMask(tmHexA)
            }
        }
        if (determineColorB) {
            for (ca = 0; ca < this.applyColorBLayers.length; ca ++) {
                caLayer = this.applyColorBLayers[ca].layerSet
                caFold = this.applyColorBLayers[ca].folderSet
                runColors = doc.activeLayer = doc.activeLayer = (caFold == '') ?  doc.artLayers.getByName(caLayer) :  doc.layerSets.getByName(caFold).artLayers.getByName(caLayer)
                selectTran(caLayer, caFold)
                fillMask(tmHexB)
            }
        }
        if (determineLogo) {
            deleteLayer('logo', applyLogoLayers.folderSet)
            placeLogo(logoFolder + d, tmSet + u + initLogo +'.ai')
            doc.activeLayer.name = 'logo'
            getDimen(layerName='logo', varName='logo')
            getDimen(layerName='rec', varName='rec')
            myScaleSize = recW/logoW*100
            selectLayer('logo')
            var startRulerUnits = app.preferences.rulerUnits
            app.preferences.rulerUnits = Units.PERCENT
            doc.activeLayer.resize(myScaleSize, myScaleSize, AnchorPosition.MIDDLECENTER)
            app.preferences.rulerUnits = startRulerUnits
            getDimen(layerName='logo', varName='logo')
            app.preferences.rulerUnits = Units.PIXELS
            myScaleSize = (logoH >= recH) ? recH/logoH*100 : 100
            selectLayer('logo')
            var startRulerUnits = app.preferences.rulerUnits
            app.preferences.rulerUnits = Units.PERCENT
            doc.activeLayer.resize(myScaleSize, myScaleSize, AnchorPosition.MIDDLECENTER)
            app.preferences.rulerUnits = startRulerUnits
            alignMyLayers('logo', 'rec', ['ADSCentersH', 'ADSCentersV'], false)
            doc.activeLayer.name = 'logo'
            if (applyLogoLayers.folderSet == '') {
            } else {
                logoThatWillMove =  doc.artLayers.getByName('logo')
                folderThatWillMove = doc.activeLayer = doc.layerSets.getByName(applyLogoLayers.folderSet)
                logoThatWillMove.move(folderThatWillMove, ElementPlacement.PLACEATEND)
            }
        }
        saveJPG(mockupFileLoc +productName + d, outputFileName)
        if(determinePrintFile) {
            
        }
        }
    }
}
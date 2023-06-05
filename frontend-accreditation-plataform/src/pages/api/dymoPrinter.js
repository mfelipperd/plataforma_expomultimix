window.onload = function() {
    // Inicialize a biblioteca Dymo
    var label = dymo.label.framework;
    
    // Localize a impressora LabelWriter 450
    var printers = label.getPrinters();
    var printer = printers.filter(function(p) {
      return p.modelName === "Dymo LabelWriter 450";
    })[0];
    
    // Defina a impressora padrão
    label.setPrinterName(printer.name);
  }
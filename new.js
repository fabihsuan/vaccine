function selectItemByValue(elmnt, value) {
  for (var i = 0; i < elmnt.options.length; i++) {
    if (elmnt.options[i].value === value) {
      elmnt.selectedIndex = i;
      break;
    }
  }
}

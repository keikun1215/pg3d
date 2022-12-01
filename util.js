document.querySelectorAll('[copy=""]').forEach(e => {
	e.insertAdjacentHTML('beforebegin', `<svg xmlns="http://www.w3.org/2000/svg" onclick="copstr(this.nextElementSibling.textContent)" width="auto" height="${e.parentNode.style.fontSize || getComputedStyle(e.parentNode).getPropertyValue('font-size')}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Copy"><path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z"/><path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/></svg>`);
})
document.querySelectorAll('[autow=""]').forEach(e => {
	e.style.height = "auto"
	e.style.width = "100%"
})
document.querySelectorAll('[autoh=""]').forEach(e => {
	e.style.height = "100%"
	e.style.width = "auto"
})
document.querySelectorAll('[fsize=""]').forEach(e => {
	e.style.height = e.parentNode.style.fontSize || getComputedStyle(e.parentNode).getPropertyValue('font-size')
	e.style.width = "auto"
})
function copstr(text){
  const pre = document.createElement('pre');
  pre.style.webkitUserSelect = 'auto';
  pre.style.userSelect = 'auto';
  pre.textContent = text;
  document.body.appendChild(pre);
  document.getSelection().selectAllChildren(pre);
  document.execCommand('copy');
  document.body.removeChild(pre);
}

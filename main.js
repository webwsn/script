var url = window.location.search;
  var id = url.replace('?url=', '');
if (!top.location.href.match(id)) {
    top.location.href = 'https://webstartnow.com/';
}

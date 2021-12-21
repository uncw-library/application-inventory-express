$(document).ready(function () {
  $('#collapsebutton').hide()

  $('#expandbutton').click(function () {
    $('button.accordion-button').removeClass('collapsed').attr('expanded', 'true')
    $('div.accordion-collapse').addClass('show')
    $('#expandbutton').hide()
    $('#collapsebutton').show()
  })

  $('#collapsebutton').click(function () {
    $('button.accordion-button').addClass('collapsed').attr('expandeded', 'false')
    $('div.accordion-collapse').removeClass('show')
    $('#expandbutton').show()
    $('#collapsebutton').hide()
  })
})

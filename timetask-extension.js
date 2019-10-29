timesheetAddTime();

var fillDialog = function () {
    var $clients = document.getElementById('add_time_list_clients'),
      $workType = document.getElementById('add_time_list_budget'),
      params = (new URL(document.location)).searchParams,
      description = params.get('description'),
      workType = params.get('type');

    document.getElementById('ftime').value = 8;
    document.getElementById('addTimeDescription').children[0].value = description;
    $clients.value = $clients.options[2].value;
    $clients.dispatchEvent(new Event('change'));

    // TODO: buscar workType en el select, por nombre

  },
  loop = setInterval(function () {
    $lastSelect = document.getElementById('add_time_list_projects')
    if ($lastSelect && $lastSelect.options.length > 1) {
      clearInterval(loop);
      fillDialog();
    }
  }, 100);

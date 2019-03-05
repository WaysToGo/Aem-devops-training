 (function () {

   	$('.__table').each(function(){
   	    var _tableLength = $(this).length,
   	    isSortingEnabled = $(this).next("input.table-sort_option").val();
        if(_tableLength >= 1){
            var _tableId = '#'+$(this)[_tableLength-1].id;

            //Adding thead into table header
            $(_tableId+" table tr:has(th)").wrapAll('<thead></thead>');
            $(_tableId+" table thead").prependTo(_tableId+" table");

            var isSortingDisabled = $(this).find('th:first').attr('scope');

            if(isSortingEnabled){
                if(isSortingDisabled == "row" || isSortingDisabled == 'col'){
                    $(_tableId+' table').DataTable({
                        "destroy": true,
                        "bSort" : true,
                        "searching": false,
                        "bPaginate": false
                    });
                }
            }
        }
  	});

 })();

let DashboardComponent = {
    render : async () => {
        return `<section class="section">
          <h1> Dashboard </h1>
          <div class="card-body row no-gutters align-items-center">
            <div class="col-auto">
                <i class="fas fa-search h4 text-body"></i>
            </div>              
            <div class="col">
                <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords">
            </div>              
            <div class="col-auto">
                <button class="btn btn-lg btn-success" type="submit">Search</button>
            </div>              
          </div>
          <section class="col-md-12">            
            <section class="col-md-8">
            </section>  
            <section class="col-md-8">
              <table id="example" class="display nowrap" cellspacing="0" width="100%">
                <thead>
                  <tr>
                    <th></th>
                    <th>Item 1</th>
                    <th>Item 2</th>
                    <th>Item 3</th>
                    <th>Item 4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-child-value="hidden 1">
                    <td class="details-control"></td>
                    <td>data 1a</td>
                    <td>data 1b</td>
                    <td>data 1c</td>
                    <td>data 1d</td>
                  </tr>
                  <tr data-child-value="hidden 2">
                    <td class="details-control"></td>
                    <td>data 2a</td>
                    <td>data 2b</td>
                    <td>data 2c</td>
                    <td>data 2d</td>
                  </tr>
                </tbody>
            </table>
            </section> 
          </section       
      </section>`;
    },
    componentDidMount: async () => { 
      /* Formatting function for row details - modify as you need */
      function format ( d ) {
          // `d` is the original data object for the row
          return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
              '<tr>'+
                  '<td>Full name:</td>'+
                  '<td>'+d+'</td>'+
              '</tr>'+
              '<tr>'+
                  '<td>Extension number:</td>'+
                  '<td>'+d+'</td>'+
              '</tr>'+
              '<tr>'+
                  '<td>Extra info:</td>'+
                  '<td>And any further details here (images etc)...</td>'+
              '</tr>'+
          '</table>';
      }      
      console.log('table');
        var table = $('#example').DataTable({
          searching: false, paging: false, info: false
        });
        // var table = $('#example').DataTable( {
        //     // "ajax": "../../shared/test.txt",
        //     // "columns": [
        //     //     {
        //     //         "className":      'details-control',
        //     //         "orderable":      false,
        //     //         "data":           null,
        //     //         "defaultContent": ''
        //     //     },
        //     //     { "data": "name" },
        //     //     { "data": "position" },
        //     //     { "data": "office" },
        //     //     { "data": "salary" }
        //     // ],
        //     "order": [[1, 'asc']]
        // } );
        
        // Add event listener for opening and closing details
        $('#example tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row( tr );
    
            if ( row.child.isShown() ) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                // Open this row
                row.child( format(row.data()) ).show();
                tr.addClass('shown');
            }
        } );      
    }
}

export default DashboardComponent;
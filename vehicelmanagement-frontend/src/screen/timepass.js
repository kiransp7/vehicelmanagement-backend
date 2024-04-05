// return (
//     <>
//       <br></br>
//       <ReactToPrint
//         trigger={() => (
//           <button  className="btn btn-primary printBtn"> Print Invoice <i className="bi bi-printer-fill" />
//  </button>
//         )}
//         content={() => componentRef.current}
//       />

//       <div ref={componentRef}>

//         <div className="container bootdey">
//           <div className="row">
//             <div className="col-sm-10 col-sm-offset-1">
//               <div className="widget-box">
//                 <div className="widget-header widget-header-large">
                  
//                   <div className="widget-toolbar no-border invoice-info topBox">
//                     <span className="invoice-info-label">InvoiceID:</span>
//                     <span className="red">{invoice.id}</span>
//                     <br />
//                     <span className="invoice-info-label">Date:</span>
//                     <span className="blue">{invoice.createdOn}</span>
//                   </div>
//                   <div className="widget-toolbar hidden-480">
//                     <a href="#">
//                       <i className="ace-icon fa fa-print" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="widget-body">
//                   <div className="widget-main padding-24">
//                     <div className="row">
//                       <div className="col-sm-6">
//                         <div className="row">
//                           <div className="col-xs-11 label label-lg label-info arrowed-in arrowed-right">
//                             <b>{selectedGarage.garageName}</b>
//                           </div>
//                         </div>
//                         <div>
//                           <ul className="list-unstyled spaced">
//                             <li>
//                               <i className="ace-icon fa fa-caret-right blue" />
//                              {selectedGarage.address}
//                             </li>
//                             <li>
//                               <i className="ace-icon fa fa-caret-right blue" />
//                               {selectedGarage.city},{selectedGarage.state}
//                             </li>
//                             <li>
//                               <i className="ace-icon fa fa-caret-right blue" />
//                               {selectedGarage.pincode}
//                             </li>
//                             <li>
//                               <i className="ace-icon fa fa-caret-right blue" />
//                               Phone:
//                               <b className="red"></b>
//                             </li>
//                             <li className="divider" />
//                             <li>
//                               <i className="ace-icon fa fa-caret-right blue" />
//                               Paymant Info
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="col-sm-6">
//                         <div className="row">
//                           <div className="col-xs-11 label label-lg label-success arrowed-in arrowed-right">
//                             <b>{loggedUser.firstname}</b>
//                           </div>
//                         </div>
//                         <div>
//                           <ul className="list-unstyled spaced">
//                             <li>
//                               <i className="ace-icon fa fa-caret-right green" />
//                                {loggedUser.lastname}
//                             </li>
//                             <li>
//                               <i className="ace-icon fa fa-caret-right green" />
//                                {loggedUser.email}
//                             </li>
//                             <li>
//                               <i className="ace-icon fa fa-caret-right green" />
//                               {loggedUser.contact}
//                             </li>
//                             <li className="divider" />
//                             <li>
//                               <i className="ace-icon fa fa-caret-right green" />
//                               Contact Info
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="space" />
//                     <div>
//                       <table className="table table-striped table-bordered">
//                         <thead>
//                           <tr>
//                             <th className="center">#</th>
//                             <th>Service</th>
//                             <th className="hidden-xs">Category</th>
//                             <th className="hidden-480">Amount</th>
//                             <th>Amount</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td className="center">1</td>
//                             <td>
//                             {invoice.selectedService.providedService.serviceName}
//                             </td>
//                             <td className="hidden-xs">
//                             {invoice.selectedService.providedService.category}
//                             </td>
//                             <td className="hidden-480">---</td>
//                             <td>{invoice.selectedService.amount}</td>
//                           </tr>
                         
//                         </tbody>
//                       </table>
//                     </div>
//                     <div className="hr hr8 hr-double hr-dotted" />
//                     <div className="row">
//                       <div className="col-sm-5 pull-right">
//                         <h4 className="pull-right">
//                           Total amount :<span className="red">{invoice.cart.totalCartPrice}</span>
//                         </h4>
//                       </div>
//                       <div className="col-sm-7 pull-left">
//                         Extra Information
//                       </div>
//                     </div>
//                     <div className="space-6" />
//                     <div className="well">
//                       Thank you for choosing Ace Company products. We believe
//                       you will be satisfied by our services.
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
// <br></br> <br></br> <br></br> <br></br> <br></br>

//       </div>
//     </>
//   )
import React, { Component } from 'react';
import {
	Button,
	Modal,
	Badge,
	InputGroup,
	Glyphicon,
	FormControl,
	DropdownButton,
	MenuItem,
	Nav,
	Dropdown,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';



export default class Reports extends Component {

	render() {
		return (
			<div className="content-page">
				<div className="content" style={{ paddingTop: 0 }}>

					<div className="container-fluid">

						<div className="row">
							<div class="col-md-12">
								<div class="card-box">
									<h1>Výkaz prác pre firmu LAN Systems s.r.o.</h1>

									<h4>Obdobie: od 1.1.2019 do 31.1.2019</h4>
									<hr />
									<h2>Služby</h2>
									<div class="table-responsive">
										<table class="table table-hover mails m-0">
											<thead>
												<tr>

													<th>
														ID

													</th>
													<th style={{ width: '20%' }}>
														Name{' '}

													</th>

													<th>
														{' '}
														Zadal{' '}

													</th>
													<th>
														Riesi{' '}

													</th>
													<th>
														Closed{' '}

													</th>
													<th>
														Služby
													</th>
													<th>
														Typ práce
													</th>
													<th>
														Hodiny
													</th>
													<th >
														Cena/th
													</th>
													<th>
														Cena spolu
													</th>
												</tr>
											</thead>

											<tbody>
												<tr class="">
													<td>152</td>

													<td>
														{' '}
														<Link className="" to={{ pathname: `/demoHelpdesk/taskTop3` }} style={{ color: "#1976d2" }}>
															Nasadenie novej tlaciarne
												</Link>
													</td>

													<td>Janko Mrkvicka</td>
													<td>Patrik Patoprsty</td>
													<td>2.10.2018</td>
													<td>
														<p className="m-b-0">Instalacia tlaciarne</p>
														<p className="m-b-0">Instalacia tlaciarne na PC</p>
													</td>
													<td>
														<p className="m-b-0">Servis IT</p>
														<p className="m-b-0">Servis IT</p>
													</td>
													<td>
														<p className="m-b-0">1</p>
														<p className="m-b-0">2</p>
													</td>
													<td>
														<p className="m-b-0">22,9</p>
														<p className="m-b-0">22,9</p>
													</td>
													<td>
														<p className="m-b-0">22,9</p>
														<p className="m-b-0">22,9</p>
													</td>
												</tr>
												<tr class="">
													<td>152</td>

													<td>
														{' '}
														<Link className="" to={{ pathname: `/demoHelpdesk/taskTop3` }} style={{ color: "#1976d2" }}>
															Nasadenie novej tlaciarne
												</Link>
													</td>

													<td>Janko Mrkvicka</td>
													<td>Patrik Patoprsty</td>
													<td>2.10.2018</td>
													<td>
														<p className="m-b-0">Instalacia tlaciarne</p>
														<p className="m-b-0">Instalacia tlaciarne na PC</p>
													</td>
													<td>
														<p className="m-b-0">Servis IT</p>
														<p className="m-b-0">Servis IT</p>
													</td>
													<td>
														<p className="m-b-0">1</p>
														<p className="m-b-0">2</p>
													</td>
													<td>
														<p className="m-b-0">22,9</p>
														<p className="m-b-0">22,9</p>
													</td>
													<td>
														<p className="m-b-0">22,9</p>
														<p className="m-b-0">22,9</p>
													</td>
												</tr>

											</tbody>
										</table>

										<h2>Material</h2>
										<div class="table-responsive">
											<table class="table table-hover mails m-0">
												<thead>
													<tr>
														<th>
															ID
												<span class="tableArrow">
																<i class="fa fa-arrow-down" />
															</span>
														</th>
														<th style={{ width: '35%' }}>
															Name{' '}
															<span class="tableArrow">
																<i class="fa fa-arrow-down" />
															</span>
														</th>
														<th>
															{' '}
															Cena/Mn.
															<span class="tableArrow">
																<i class="fa fa-arrow-down" />
															</span>
														</th>
														<th>
															Mn.
															<span class="tableArrow">
																<i class="fa fa-arrow-down" />
															</span>
														</th>
														<th>
															Jednotka
															<span class="tableArrow">
																<i class="fa fa-arrow-down" />
															</span>
														</th>

														<th>
															Zlava
															<span class="tableArrow">
																<i class="fa fa-arrow-down" />
															</span>
														</th>
														<th>
															Spolu
															<span class="tableArrow">
																<i class="fa fa-arrow-down" />
															</span>
														</th>
													</tr>
												</thead>

												<tbody>
													<tr class="">
														<td>152</td>
														<td>
															{' '}
															<Link className="" to={{ pathname: `/demoHelpdesk/taskTop3` }} style={{ color: "#1976d2" }}>
																Tlaciaren
												</Link>
														</td>
														<td>10</td>
														<td>1</td>
														<td>ks</td>
														<td>0</td>
														<td>10</td>
													</tr>

												</tbody>
											</table>
										</div>

										<div class="d-flex justify-content-between">
											<div class="p-2">
												<p>Page 1 of 0 ｜ Task number: 0 </p>
											</div>
											<div class="p-2">
												<p>1</p>
											</div>
											<div class="p-2">
												<p>Items per page: 20</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

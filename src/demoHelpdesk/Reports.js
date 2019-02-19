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
						<div class="d-flex flex-row align-items-center">


							<div class="p-2">
								{' '}
								<button type="button" class="btn btn-link waves-effect">
									<i
										class="fa fa-file-pdf"
										style={{
											color: '#4a81d4',
											fontSize: '1.2em',
										}}
									/>
									<span style={{
										color: '#4a81d4',
										fontSize: '1.2em',
									}}> Export</span>
								</button>
							</div>
							<div class="">
								{' '}
								<button type="button" class="btn btn-link waves-effect">
									<i
										class="fas fa-print"
										style={{
											color: '#4a81d4',
											fontSize: '1.2em',
										}}
									/>
									<span style={{
										color: '#4a81d4',
										fontSize: '1.2em',
									}}> Print</span>
								</button>
							</div>
							<div class="">
								{' '}
								<button type="button" class="btn btn-link waves-effect">
									<i
										class="fas fa-sync"
										style={{
											color: '#4a81d4',
											fontSize: '1.2em',
										}}
									/>
									<span style={{
										color: '#4a81d4',
										fontSize: '1.2em',
									}}> Aktualizovať ceny podla cenníka</span>
								</button>
							</div>

						</div>
						<div className="row">
							<div class="col-md-12">
								<div class="card-box">
									<h1>Výkaz prác pre firmu LAN Systems s.r.o.</h1>

									<h4>Obdobie: od 1.1.2019 do 31.1.2019</h4>
									<hr />
									<h3>Služby v rámci paušálu</h3>
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

										<p className="m-0">Spolu zlava bez DPH: 105 EUR</p>
										<p className="m-0">Spolu cena bez DPH: 105 EUR</p>
										<p className="m-0">Spolu cena s DPH: 126 EUR</p>
										<hr />
										<h3>Služby nad rámec paušálu</h3>
										<hr />
										<h3>Projektové služby </h3>
										<hr />
										<h3>Material</h3>


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
														Material
													</th>
													<th>
														Mn.
													</th>
													<th>
														Jednotka
													</th>
													<th >
														Cena/Mn.
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
														<p className="m-b-0">Tlaciaren</p>
														<p className="m-b-0">USB Kabel</p>
													</td>
													<td>
														<p className="m-b-0">1</p>
														<p className="m-b-0">1</p>
													</td>
													<td>
														<p className="m-b-0">ks</p>
														<p className="m-b-0">ks</p>
													</td>
													<td>
														<p className="m-b-0">100</p>
														<p className="m-b-0">5</p>
													</td>
													<td>
														<p className="m-b-0">100</p>
														<p className="m-b-0">5</p>
													</td>
												</tr>


											</tbody>
										</table>
										<p className="m-0">Spolu cena bez DPH: 105 EUR</p>
										<p className="m-0">Spolu cena s DPH: 126 EUR</p>
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

import React, {useEffect, useState,useRef } from 'react';


import scoreboard from './ScoreBoardData'

export default function ScoreBoardTable(props) {



		props.data.sort((a, b) => (a.score < b.score) ? 1 : -1)
	
		
        return (
			props.data.length > 0 && (
				<div class="scrollTable">
				<table class="table table-striped">
					<thead>
						<tr>
							<th scope="col">Nick</th>
							<th scope="col">Score:</th>
						</tr>
					</thead>
					<tbody>
						{props.data.map(p => (
							<tr>
								<td scope="row">{p.nick}</td>
								<td scope="row">{p.score}</td>
							</tr>
						))}
					</tbody>
				</table>
				</div>
			)
		);




		
}
### Different kinds of tests

<div class="flex">
	<div class="col">
		<h4>Unit test</h4>
		<ul class="fragment">
			<li>Test small units (Pipes, Components, ...)</li>
			<li>Don't use the DOM</li>
			<li>Run in browser</li>
			<li>Mock away dependencies</li>
		</ul>
	</div>
	<div class="col">
		<h4>UI Test</h4>
		<ul class="fragment">
			<li>Test integrated application</li>
			<li>Only test behavior via the DOM</li>
			<li>Run on target device (phone, tablet or PC)</li>
			<li>Mock away backend or nothing at all (end-to-end test)</li>
		</ul>
	</div>
</div>
import Container from "./container"

export default function Color() {
	return (
		<>
			<Container>
				<div className="text-primary text-4xl">primary</div>
				<div className="text-primary-content text-4xl bg-primary" >primary-content</div>
				<div className="text-secondary text-4xl">secondary</div>
				<div className="text-accent text-4xl">accent</div>
				<div className="text-neutral text-4xl">neutral</div>
				<div className="text-base-100 text-4xl bg-neutral">base-100</div>
				<div className="text-base-200 text-4xl">base-200</div>
				<div className="text-base-300 text-4xl">base-300</div>
				<div className="text-base-content text-4xl">base-content</div>
				<div className="text-info text-4xl">info</div>
				<div className="text-success text-4xl">success</div>
				<div className="text-warning text-4xl">warning</div>
				<div className="text-error text-4xl">error</div>
			</Container>
		</>
	)
};
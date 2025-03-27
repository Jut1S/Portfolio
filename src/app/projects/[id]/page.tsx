export default function ProjectPage({ params }) {
    const { id } = params;

    return (
        <div>
            <h1>Project Details</h1>
            <p>Project ID: {id}</p>
        </div>
    );
}
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button type="btn" class='btn btn-danger'>Danger</button>
      <button className="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
      <button type="button" class="btn btn-primary">Click me</button>

    </div>
  );
}

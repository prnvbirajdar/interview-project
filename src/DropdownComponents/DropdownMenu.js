export default function DropdownMenu({ setSelectedTopic, coursesTags }) {
  return (
    <form action="/action_page.php">
      <label htmlFor="courses">Choose a topic:</label>
      <select
        className="border bg-gray-100 w-full p-2 rounded-md"
        name="topic"
        onChange={e => setSelectedTopic(e.target.value)}
      >
        <option value="All">All</option>
        {coursesTags?.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </form>
  );
}

export default function serviceList({ title, thumbnail }) {
  return (
    <div className="flex items-center">
      <img src={thumbnail} className="w-12 h-12 rounded-full mr-4" alt={title} />
      <div className="text-xl font-bold">{title}</div>
    </div>
  )
}

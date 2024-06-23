export default function ContactUsIcon({ icon, title, text }) {
  return (
    <div class="flex m-7 content-center">
      <span class=" bg-[#ffcc00] w-16 h-16 hover:bg-black transition-all delay-200 ml-2">
        {icon}
      </span>
      <div>
        <h3 class="font-semibold text-xl">{title}</h3>
        <p class="font-thin">{text}</p>
      </div>
    </div>
  );
}

import ActivityCard from '@/app/activities-ku/components/ActivityCard'

export default function Activities() {
  return (
    <div className="flex flex-col space-y-2 p-5 justify-center items-center bg-baseBackground">
      <h2 className="text-subTitleColor font-semibold text-base sm:text-lg md:text-xl">
        What we do
      </h2>
      <h1 className="text-titleColor text-lg sm:text-2xl md:text-3xl  font-bold">
        {' '}
        Activities We Are Actively Doing
      </h1>
      <div className="flex-col p-2">
        <div className="space-y-5 grid sm:grid-cols-2 md:grid-cols-3 md:space-y-0 md:space-x-4 max-w-screen-xl">
          <ActivityCard
            title="IT Meet"
            description=" “IT MEET” is an ICT event organized by KUCC and DoCSE to encourage interaction between students from various institutions of Nepal and youths from various walks of life."
          />
          <ActivityCard
            title="Software Freedom Day"
            description=" Software Freedom Day (SFD) is an annual worldwide celebration of Free Software. SFD is a public education effort with the aim of increasing awareness of Free Software and its virtues, and encouraging its use."
          />
          <ActivityCard
            title="Workshops"
            description=" Kathmandu University Computer Club conducts regular monthly and weekly workshops through different communities formed under KUCC."
          />
        </div>
      </div>
    </div>
  )
}

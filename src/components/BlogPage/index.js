import React from 'react'
import { useParams } from 'react-router-dom'
import './BlogPage.sass'
export default function BlogPage() {
  let params = useParams()

  //need to get this data from db from param data
  console.log(params.id)

  //assuming this data for now
  let data = {
    id: 'akdfj',
    title: 'Something in title',
    blog: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam dui vel diam interdum convallis. Duis at dolor congue, vehicula felis sit amet, feugiat mi. In suscipit justo non odio dapibus efficitur. Proin nec mattis ante. Donec iaculis purus ipsum, vulputate tincidunt nibh sodales eget. Nam facilisis lectus auctor neque pharetra hendrerit. Suspendisse efficitur, ligula quis viverra placerat, lectus sapien cursus magna, eget gravida nisl lectus et quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

            Phasellus nisl massa, dignissim non tellus eget, posuere gravida velit. Donec id augue metus. Vestibulum sit amet dui sit amet lorem volutpat tincidunt. Integer sit amet viverra nibh. Suspendisse sed est varius, rhoncus ligula non, euismod velit. Quisque viverra eros felis, ac bibendum dolor molestie nec. Nulla lobortis posuere congue. Ut lacinia porttitor ante, vel lacinia magna rhoncus et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris at ligula vel ipsum maximus vestibulum. Duis quis hendrerit enim. Quisque convallis lacus condimentum leo convallis, pulvinar aliquet ipsum semper.
            
            Suspendisse lorem libero, facilisis eget magna non, bibendum ultricies lectus. Ut magna neque, blandit non dignissim quis, varius non sem. Phasellus posuere eu ipsum convallis iaculis. Etiam molestie bibendum felis, nec condimentum sem blandit vitae. In cursus mattis elit quis lobortis. Ut commodo, nulla eget aliquet accumsan, sem metus ornare neque, vitae dapibus dolor magna ut odio. Cras leo quam, porttitor at eros porttitor, feugiat molestie est.
            
            Aliquam ac luctus est. Ut placerat pretium velit, et porta massa ullamcorper eget. In hac habitasse platea dictumst. Quisque eu tempor massa, in varius mi. Nulla sapien ante, eleifend at tristique vitae, rutrum eget tellus. Nam vel ligula sodales lacus tempor malesuada. Maecenas sit amet odio cursus sapien elementum venenatis at quis purus. Vestibulum scelerisque elit mi, et placerat est ullamcorper id. Vivamus faucibus porta ipsum, in fringilla est lacinia in. Pellentesque et ex tincidunt, malesuada enim sit amet, commodo lorem. Maecenas eros ante, eleifend ac iaculis ut, eleifend cursus dolor. Sed purus lacus, lobortis at mauris quis, condimentum auctor ipsum.
            
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec porttitor mi eros, viverra feugiat enim pellentesque id. Suspendisse facilisis blandit urna eget elementum. Donec feugiat dapibus justo non vulputate. Curabitur in nisl iaculis, lobortis erat eu, tincidunt tortor. Etiam purus ante, aliquam lacinia magna vestibulum, condimentum aliquam magna. Nunc eu aliquet sapien, vel ultricies ligula. Morbi consectetur efficitur velit, eu rutrum massa pretium non. Integer tempor augue eros, nec scelerisque dui fringilla non. Proin euismod ex eget nisl auctor, id porta nulla lobortis. Phasellus lorem elit, viverra vitae sodales eget, imperdiet eget purus. Duis pharetra tortor mauris, ac rhoncus nulla faucibus tempor. Vestibulum venenatis metus sed odio tristique vestibulum. Pellentesque eget ipsum in sem ornare ultricies. Phasellus nulla justo, porttitor nec ullamcorper at, consequat in mi.
            
            Nullam consequat in nisl vitae sollicitudin. Etiam venenatis quam a tempor mattis. Donec convallis lobortis ipsum, vitae facilisis sapien viverra at. Pellentesque hendrerit ornare tellus, ac euismod urna venenatis id. Aenean imperdiet sapien vel turpis mattis, id vestibulum magna bibendum. Donec nec libero non urna maximus venenatis in id ex. Maecenas accumsan est ac ligula vulputate feugiat. Aliquam vitae ipsum sed magna fringilla porta. Donec tristique tellus vel dui feugiat volutpat. Morbi dignissim hendrerit orci, sit amet accumsan nulla sagittis non.
            
            Nunc congue arcu nec vestibulum porttitor. Nam consequat vehicula nulla a commodo. Cras nisi metus, scelerisque a hendrerit non, elementum eu neque. Quisque at lacus magna. Quisque lobortis ut sem at porta. Suspendisse odio tellus, tristique sed dui sed, elementum bibendum arcu. Phasellus suscipit enim a quam gravida sollicitudin. Suspendisse bibendum, dolor non aliquam imperdiet, eros ligula ultrices mauris, non rutrum odio metus quis quam. Mauris sed mi tortor. Phasellus fringilla ante quis mi fringilla placerat. Nam ullamcorper massa eget nisl lacinia semper.
            
            Vivamus maximus sem faucibus sapien mollis tempus. Suspendisse nisl ante, imperdiet sit amet felis vitae, efficitur sodales ipsum. Phasellus consectetur magna nulla, id commodo erat aliquam a. Sed varius faucibus mauris quis commodo. Nam eu nibh tortor. Vestibulum eget tincidunt ex. Etiam sagittis laoreet est, at elementum turpis finibus at. Phasellus pharetra auctor eros, tempor pharetra mi auctor ac. `,
    author: 'Someone Surname',
    date: '11-July, 2022',
  }

  return (
    <div className="BlogPage">
      <h1>{data.title}</h1>
      <h4>{data.author}</h4>
      <p>{data.date}</p>
      <p>{data.blog}</p>
    </div>
  )
}

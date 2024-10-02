import { type PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string; 
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({ title, children, onDelete, id }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>
          {title}
        </h2>
        {children}
      </div>
      <button onClick={()=>onDelete(id)}>Delete</button>
    </article>
  );
}



// FC = functional component, a generic type
// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//   return (
//     <article>
//     <div>
//       <h2>
//         {title}
//       </h2>
//       {children}
//     </div>
//     <button>Delete</button>
//   </article>
//   )
// }
// when using the declaration with const then is a new export statement of this function needed
// export default CourseGoal;



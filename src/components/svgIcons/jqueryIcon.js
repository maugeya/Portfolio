import React from 'react'
import styles from './techIcon.module.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const JqueryIcon = () => {
    return (
        <div className={styles.iconContainer}>
            <Tippy content="jQuery">
                <svg className={styles.techIconSvg} baseProfile="tiny" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g id="Layer_6">
                        <g>
                            <path className={styles.techIconPath} d="M34.317,126.054c-44.877,64.496-39.286,148.409-5.01,216.945c0.816,1.644,1.67,3.259,2.513,4.88    c0.537,1.02,1.044,2.072,1.603,3.08c0.314,0.607,0.669,1.199,0.998,1.779c0.586,1.095,1.182,2.131,1.79,3.199    c1.065,1.876,2.158,3.741,3.272,5.606c0.618,1.025,1.228,2.05,1.865,3.074c1.236,1.996,2.502,3.976,3.799,5.943    c0.54,0.841,1.065,1.682,1.619,2.494c1.787,2.668,3.614,5.331,5.498,7.944c0.049,0.065,0.103,0.136,0.158,0.201    c0.298,0.423,0.629,0.835,0.93,1.253c1.629,2.25,3.313,4.468,5.01,6.669c0.626,0.798,1.261,1.6,1.89,2.402    c1.516,1.909,3.061,3.802,4.631,5.693c0.588,0.705,1.177,1.415,1.771,2.109c2.106,2.479,4.256,4.951,6.456,7.375    c0.038,0.044,0.089,0.093,0.13,0.136c0.089,0.103,0.168,0.168,0.247,0.266c2.145,2.343,4.338,4.637,6.562,6.925    c0.688,0.704,1.394,1.415,2.101,2.12c1.722,1.729,3.471,3.427,5.238,5.135c0.718,0.678,1.429,1.377,2.142,2.033    c2.361,2.224,4.745,4.403,7.177,6.529c0.043,0.043,0.073,0.076,0.114,0.092c0.412,0.369,0.84,0.722,1.247,1.063    c2.145,1.859,4.325,3.703,6.521,5.515c0.895,0.721,1.8,1.437,2.701,2.152c1.795,1.438,3.608,2.853,5.436,4.246    c0.965,0.737,1.933,1.475,2.906,2.213c2.015,1.475,4.045,2.943,6.098,4.37c0.749,0.542,1.472,1.062,2.224,1.578    c0.206,0.146,0.396,0.298,0.607,0.438c1.947,1.334,3.934,2.631,5.921,3.916c0.854,0.568,1.703,1.154,2.565,1.707    c3.05,1.926,6.144,3.834,9.272,5.684c0.852,0.482,1.708,0.96,2.562,1.442c2.299,1.328,4.612,2.63,6.96,3.904    c1.266,0.683,2.57,1.328,3.847,1.979c1.659,0.873,3.302,1.751,4.983,2.586c0.382,0.195,0.778,0.38,1.155,0.559    c0.672,0.325,1.355,0.646,2.036,0.987c2.608,1.247,5.238,2.467,7.89,3.654c0.567,0.249,1.112,0.499,1.673,0.743    c3.04,1.328,6.106,2.613,9.208,3.834c0.743,0.298,1.494,0.585,2.243,0.884c2.866,1.101,5.77,2.19,8.684,3.216    c0.371,0.13,0.727,0.249,1.092,0.373c3.202,1.123,6.434,2.158,9.69,3.173c0.775,0.228,1.556,0.478,2.337,0.705    c3.313,0.997,6.583,2.185,10.005,2.819c217.021,39.574,280.061-130.418,280.061-130.418    c-52.942,68.976-146.924,87.174-235.967,66.914c-3.376-0.759-6.646-1.811-9.938-2.787c-0.837-0.249-1.656-0.498-2.48-0.753    c-3.213-0.987-6.399-2.022-9.568-3.112c-0.434-0.152-0.873-0.314-1.315-0.473c-2.838-0.997-5.642-2.049-8.438-3.129    c-0.789-0.314-1.578-0.612-2.364-0.927c-3.063-1.209-6.108-2.473-9.11-3.79c-0.621-0.261-1.212-0.537-1.819-0.809    c-2.583-1.166-5.138-2.342-7.689-3.568c-0.732-0.357-1.47-0.704-2.218-1.067c-1.996-0.971-3.975-2.007-5.943-3.021    c-1.32-0.694-2.662-1.355-3.966-2.077c-2.408-1.29-4.772-2.63-7.123-3.996c-0.8-0.45-1.605-0.879-2.408-1.34    c-3.129-1.843-6.22-3.752-9.278-5.688c-0.843-0.536-1.67-1.111-2.502-1.664c-2.218-1.432-4.428-2.885-6.6-4.393    c-0.721-0.477-1.42-1.008-2.128-1.491c-2.102-1.48-4.178-2.987-6.242-4.511c-0.933-0.689-1.857-1.405-2.765-2.094    c-1.89-1.447-3.771-2.9-5.631-4.403c-0.838-0.667-1.681-1.339-2.511-2.012c-2.367-1.946-4.704-3.898-7.014-5.905    c-0.241-0.217-0.504-0.423-0.767-0.645c-2.495-2.196-4.951-4.447-7.372-6.708c-0.705-0.672-1.388-1.323-2.077-2.001    c-1.797-1.702-3.562-3.427-5.297-5.189c-0.694-0.694-1.394-1.383-2.077-2.071c-2.209-2.267-4.376-4.555-6.501-6.881    c-0.106-0.114-0.217-0.217-0.32-0.342c-2.248-2.457-4.444-4.967-6.594-7.505c-0.583-0.694-1.149-1.366-1.727-2.05    c-1.602-1.931-3.191-3.889-4.742-5.867c-0.586-0.705-1.168-1.438-1.744-2.164c-1.865-2.424-3.692-4.836-5.482-7.299    C47.589,251.017,29.828,158.009,69.339,81.627"/>
                            <path className={styles.techIconPath} d="M173.617,71.714c-32.454,46.705-30.691,109.215-5.376,158.61c4.246,8.28,9.018,16.311,14.356,23.962    c4.861,6.968,10.249,15.259,16.701,20.854c2.343,2.576,4.786,5.092,7.283,7.56c0.632,0.651,1.277,1.264,1.922,1.903    c2.421,2.343,4.888,4.658,7.437,6.903c0.105,0.087,0.198,0.189,0.304,0.26c0.027,0.032,0.054,0.044,0.07,0.076    c2.82,2.468,5.731,4.848,8.689,7.185c0.656,0.499,1.307,1.025,1.971,1.54c2.963,2.272,5.987,4.512,9.088,6.638    c0.092,0.064,0.171,0.13,0.263,0.206c1.367,0.938,2.763,1.821,4.146,2.728c0.667,0.434,1.299,0.895,1.969,1.301    c2.212,1.416,4.455,2.799,6.735,4.127c0.322,0.201,0.64,0.363,0.952,0.548c1.965,1.133,3.958,2.25,5.957,3.329    c0.697,0.396,1.407,0.737,2.118,1.106c1.38,0.722,2.76,1.453,4.167,2.158c0.203,0.098,0.423,0.195,0.626,0.282    c2.86,1.409,5.748,2.766,8.692,4.045c0.627,0.276,1.277,0.525,1.92,0.791c2.351,0.998,4.731,1.975,7.117,2.891    c1.014,0.385,2.039,0.748,3.053,1.123c2.166,0.803,4.347,1.539,6.54,2.277c0.992,0.314,1.965,0.64,2.958,0.943    c3.12,0.965,6.203,2.19,9.456,2.732c167.56,27.764,206.247-101.25,206.247-101.25c-34.875,50.212-102.405,74.186-174.468,55.478    c-3.199-0.84-6.353-1.757-9.486-2.744c-0.96-0.292-1.903-0.607-2.853-0.922c-2.229-0.721-4.444-1.49-6.64-2.287    c-1.006-0.364-2.01-0.732-2.996-1.112c-2.408-0.927-4.786-1.882-7.145-2.885c-0.643-0.276-1.296-0.521-1.925-0.813    c-2.958-1.285-5.87-2.646-8.744-4.056c-1.478-0.728-2.928-1.491-4.381-2.234c-0.841-0.439-1.687-0.873-2.53-1.307    c-1.868-1.015-3.72-2.061-5.55-3.129c-0.431-0.249-0.884-0.482-1.323-0.749c-2.271-1.328-4.506-2.694-6.719-4.099    c-0.683-0.439-1.339-0.911-2.022-1.356c-1.461-0.948-2.92-1.908-4.352-2.879c-3.088-2.125-6.095-4.359-9.056-6.626    c-0.683-0.537-1.369-1.063-2.039-1.6c-31.546-24.906-56.543-58.943-68.43-97.53c-12.458-40.029-9.776-84.95,11.808-121.411"/>
                            <path className={styles.techIconPath} d="M290.774,31.116c-19.131,28.154-21.01,63.119-7.735,94.217c13.998,33.007,42.684,58.9,76.168,71.171    c1.38,0.515,2.757,0.976,4.159,1.448c0.609,0.19,1.214,0.396,1.832,0.575c1.972,0.623,3.932,1.345,5.971,1.729    c92.52,17.878,117.615-47.48,124.296-57.1c-21.986,31.651-58.925,39.249-104.254,28.252c-3.582-0.879-7.519-2.169-10.968-3.395    c-4.425-1.573-8.784-3.373-13.024-5.406c-8.047-3.867-15.718-8.562-22.835-13.931c-40.558-30.778-65.759-89.488-39.291-137.305"/>
                        </g>
                    </g>
                </svg>
            </Tippy>
        </div>
        
    )
}

export default JqueryIcon

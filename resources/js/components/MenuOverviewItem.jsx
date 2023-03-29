import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function MenuOverviewItem({name, icon, budget, sum, currency}) {
    function getProgressBarClassName() {
        return `progress-bar bg-${getProgressStatus()}`;
    }

    function calculateUtilization() {
        const utilization = sum / budget;
        return Math.ceil(utilization * 100);
    }

    function getProgressStatus() {
        const utilization = calculateUtilization();

        if (utilization < 50) {
            return 'success';
        } else if (utilization < 90) {
            return 'warning';
        } else {
            return 'danger';
        }
    }

    return (
        <div className="menu-overview-item">
            <div className="menu-overview-item__name">
                <FontAwesomeIcon icon={icon} />
                <span>{name}</span>
            </div>
            <div className="menu-overview-item__progress">
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={calculateUtilization()} aria-valuemin="0" aria-valuemax="100">
                    <div className={getProgressBarClassName()} style={{width: `${calculateUtilization()}%`, }}></div>
                </div>
            </div>
            <div className="menu-overview-item__sum">{sum} EUR</div>
        </div>
    );
}
